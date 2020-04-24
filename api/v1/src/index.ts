import * as fs from 'fs-extra';
import { IQuestionnaire, IQuestionnaireMeta, IQuestion } from '../../../react-with-json-logic/src/logic/schema';
import * as glob from 'fast-glob';
import { validate } from './validate';
import { loadTranslation, doOnEachTranslation, md5, IDENTIFIER_REGEX, getStringRessource } from './utility';
class TranslationNotCompleteError extends Error {
  constructor(m: string) {
    super(m);
  }
}

const PATHS = {
  VIEWS_QUESTIONNAIRES: '/views/questionnaires',
};

/**
 * Validates and generates the static API
 */
export function main(pwd: string = './src', outputDir: string = './dist') {
  // Get all Questionnaire
  let questionnairePaths = glob.sync(`${pwd}/data/**/*.json`);

  console.log('Validating the Questionnaires...');
  validate(questionnairePaths);

  console.log('Building the static API');
  build(questionnairePaths, outputDir);
}

export function build(paths: string[], outputPath: string) {
  let index: IQuestionnaire[] = [];

  // Retrieving available languages
  let languages: Language[] = glob.sync('./src/i18n/*.xlf').map((p) => {
    return {
      path: p,
      translations: loadTranslation(p),
      id: p.match(/translation\.(\S*)\.xlf/)[1],
    };
  });

  /**
   * Generate the questionnaire JSON files
   */
  paths.forEach((path) => {
    let questionnaire: IQuestionnaire = JSON.parse(fs.readFileSync(path, 'utf-8'));

    // Languages Files
    languages.forEach((lang) => {
      try {
        const translatedQuestionnaire = translateQuestionnaire(questionnaire, lang);
        index.push(translatedQuestionnaire);
        fs.outputFileSync(
          `${outputPath}${PATHS.VIEWS_QUESTIONNAIRES}/${questionnaire.id}/${questionnaire.version}/${lang.id}.json`,
          JSON.stringify(translatedQuestionnaire)
        );
      } catch (e) {
        if (e instanceof TranslationNotCompleteError) {
          console.warn(`WARNING: ${e}`);
        } else {
          throw e;
        }
      }
    });
  });

  // Index Document
  let indexMap = index.reduce((accumulator, current, index, array) => {
    if (accumulator[current.id] != null) {
      accumulator[current.id].availableLanguages.push(current.meta.language);
    } else {
      accumulator[current.id] = {
        id: current.id,
        availableLanguages: [current.meta.language],
        meta: { ...current.meta, language: undefined },
        version: current.version,
        path: `${PATHS.VIEWS_QUESTIONNAIRES}/${current.id}/${current.version}`,
      };
    }
    return accumulator;
  }, {} as { [key: string]: QuestionIndexEntry });
  fs.outputFileSync(
    `${outputPath}${PATHS.VIEWS_QUESTIONNAIRES}.json`,
    JSON.stringify(Object.keys(indexMap).map((key) => indexMap[key]))
  );

  /**
   * Generate Questions
   */
  let questions: IQuestion[] = [];
  paths.forEach((path) => {
    let questionnaire: IQuestionnaire = JSON.parse(fs.readFileSync(path, 'utf-8'));
    questions = [...questions, ...questionnaire.questions];
  });
  fs.outputFileSync(`${outputPath}/questions.json`, JSON.stringify(questions));

  /**
   * Generate Language Files
   */
  languages.forEach((lang) => {
    fs.outputFileSync(`${outputPath}/translations/${lang.id}.json`, JSON.stringify(lang.translations));
  });
}

export function translateQuestionnaire(q: IQuestionnaire, lang: Language): IQuestionnaire {
  q.meta.language = lang.id;

  doOnEachTranslation(q, (key, value, obj) => {
    let [trans, id] = getStringRessource(value);
    let translation = lang.translations[id || md5(value)];
    if (translation == null) {
      throw new TranslationNotCompleteError(
        `Questionnaire with id "${q.id}" could not be translated, because there is no translation in "${lang.id}" for "${key}" (${value})`
      );
    }
    obj[key] = translation;
  });

  return q;
}

main();

interface Language {
  id: string;
  path: string;
  translations: { [key: string]: string };
}

interface QuestionIndexEntry {
  id: string;
  version: string;
  availableLanguages: string[];
  meta: IQuestionnaireMeta;
  path: string;
}