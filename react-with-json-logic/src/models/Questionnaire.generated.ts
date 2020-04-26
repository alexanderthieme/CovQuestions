/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The questionaire.
 */
export interface Questionnaire {
  /**
   * Unique, assigned identifier. Machine friendly.
   */
  id: string;
  /**
   * Meta-Information for a questionaire.
   */
  meta: {
    author: string;
    /**
     * Creation date as ISO 8601 string
     */
    creationDate: string;
    description?: string;
    /**
     * Expiration date as ISO 8601 string
     */
    experiationDate?: string;
    /**
     * Language of this questionaire, as ISO 639-1 code.
     * Note that further languages can be defined in external lookup files.
     */
    language: string;
    publisher?: string;
    /**
     * Region restriction (e.g. regions in which this questionaire is valid) as list of ISO 3166 ids.
     */
    regions?: string[];
    title: string;
  };
  /**
   * All questions, shown one after another, in order.
   */
  questions: (YesNoTextOrDateQuestion | QuestionWithOptions | NumericQuestion)[];
  /**
   * All result categories. When all questions are answered,
   * the result for each result category is computed.
   */
  resultCategories: {
    /**
     * A human readable description for the result category. Can be localized.
     */
    description: string;
    /**
     * A unique identifier for this result category.
     */
    id: string;
    /**
     * A list of results for this category.
     */
    results: {
      /**
       * A unique identifier for this result.
       */
      id: string;
      /**
       * A human readable text for this result. Can be localized.
       */
      text: string;
      /**
       * Logic expression used to compute this variable. Defaults to true.
       */
      value:
        | (
            | LogicIf
            | LogicReduce
            | LogicSome
            | LogicEquals
            | LogicGreaterEqual
            | LogicNot
            | LogicLessEqual
            | LogicPlus
            | LogicMinus
            | LogicAnd
            | LogicOr
            | LogicIn
            | LogicGreater
            | LogicLess
          )
        | {
            var: string;
          }
        | (number | string | boolean);
    }[];
  }[];
  /**
   * File format/api version in semver.
   */
  schemaVersion: string;
  /**
   * All variables, refreshed after each update to any answer.
   */
  variables: {
    /**
     * Unique id for referring this variable in logic expressions.
     */
    id: string;
    /**
     * Logic expression used to compute this variable. Defaults to true.
     */
    value:
      | (
          | LogicIf
          | LogicReduce
          | LogicSome
          | LogicEquals
          | LogicGreaterEqual
          | LogicNot
          | LogicLessEqual
          | LogicPlus
          | LogicMinus
          | LogicAnd
          | LogicOr
          | LogicIn
          | LogicGreater
          | LogicLess
        )
      | {
          var: string;
        }
      | (number | string | boolean);
  }[];
  /**
   * Version of this question in semver.
   */
  version: string;
}
/**
 * Represents a question. The answer is a choice of yes/no, text or date.
 */
export interface YesNoTextOrDateQuestion {
  /**
   * Optional human-readable details or clarifiation about this question.
   */
  details?: string;
  /**
   * Logic expression used to compute this variable. Defaults to true.
   */
  enableWhen?:
    | (
        | LogicIf
        | LogicReduce
        | LogicSome
        | LogicEquals
        | LogicGreaterEqual
        | LogicNot
        | LogicLessEqual
        | LogicPlus
        | LogicMinus
        | LogicAnd
        | LogicOr
        | LogicIn
        | LogicGreater
        | LogicLess
      )
    | {
        var: string;
      }
    | (number | string | boolean);
  /**
   * Unique id for referring this question in logic expressions.
   */
  id: string;
  /**
   * Boolean indicating whether the question is optional or not.
   */
  optional?: boolean;
  /**
   * Human-readable question text, can be localized.
   */
  text: string;
  /**
   * Type of the question.
   */
  type: "boolean" | "date" | "text" | "multiselect" | "number" | "select";
}
export interface LogicIf {
  if: [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicReduce {
  reduce: [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicSome {
  some: [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicEquals {
  "==": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicGreaterEqual {
  ">=": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicNot {
  "!":
    | (
        | (
            | LogicIf
            | LogicReduce
            | LogicSome
            | LogicEquals
            | LogicGreaterEqual
            | LogicNot
            | LogicLessEqual
            | LogicPlus
            | LogicMinus
            | LogicAnd
            | LogicOr
            | LogicIn
            | LogicGreater
            | LogicLess
          )
        | {
            var: string;
          }
        | (number | string | boolean)
      )
    | (
        | (
            | LogicIf
            | LogicReduce
            | LogicSome
            | LogicEquals
            | LogicGreaterEqual
            | LogicNot
            | LogicLessEqual
            | LogicPlus
            | LogicMinus
            | LogicAnd
            | LogicOr
            | LogicIn
            | LogicGreater
            | LogicLess
          )
        | {
            var: string;
          }
        | (number | string | boolean)
      )[];
}
export interface LogicLessEqual {
  "<=": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicPlus {
  "+": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicMinus {
  "-": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicAnd {
  and: (
    | (
        | LogicIf
        | LogicReduce
        | LogicSome
        | LogicEquals
        | LogicGreaterEqual
        | LogicNot
        | LogicLessEqual
        | LogicPlus
        | LogicMinus
        | LogicAnd
        | LogicOr
        | LogicIn
        | LogicGreater
        | LogicLess
      )
    | {
        var: string;
      }
    | (number | string | boolean)
  )[];
}
export interface LogicOr {
  or: (
    | (
        | LogicIf
        | LogicReduce
        | LogicSome
        | LogicEquals
        | LogicGreaterEqual
        | LogicNot
        | LogicLessEqual
        | LogicPlus
        | LogicMinus
        | LogicAnd
        | LogicOr
        | LogicIn
        | LogicGreater
        | LogicLess
      )
    | {
        var: string;
      }
    | (number | string | boolean)
  )[];
}
export interface LogicIn {
  in: [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )[]
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )[]
    )
  ];
}
export interface LogicGreater {
  ">": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
export interface LogicLess {
  "<": [
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    ),
    (
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
      | (
          | (
              | LogicIf
              | LogicReduce
              | LogicSome
              | LogicEquals
              | LogicGreaterEqual
              | LogicNot
              | LogicLessEqual
              | LogicPlus
              | LogicMinus
              | LogicAnd
              | LogicOr
              | LogicIn
              | LogicGreater
              | LogicLess
            )
          | {
              var: string;
            }
          | (number | string | boolean)
        )
    )
  ];
}
/**
 * Represents a question with predefined answers to select.
 */
export interface QuestionWithOptions {
  /**
   * Optional human-readable details or clarifiation about this question.
   */
  details?: string;
  /**
   * Logic expression used to compute this variable. Defaults to true.
   */
  enableWhen?:
    | (
        | LogicIf
        | LogicReduce
        | LogicSome
        | LogicEquals
        | LogicGreaterEqual
        | LogicNot
        | LogicLessEqual
        | LogicPlus
        | LogicMinus
        | LogicAnd
        | LogicOr
        | LogicIn
        | LogicGreater
        | LogicLess
      )
    | {
        var: string;
      }
    | (number | string | boolean);
  /**
   * Unique id for referring this question in logic expressions.
   */
  id: string;
  /**
   * Boolean indicating whether the question is optional or not.
   */
  optional?: boolean;
  /**
   * Answer options for Select/Multiselect questions.
   */
  options?: {
    /**
     * Human-Readable formulation of this option as yes/no question.
     * This is for use-cases where multi-selects are not possible in the UI,
     * for example telephone hotlines.
     */
    asQuestion?: string;
    /**
     * Human-Readable answer, can be localized.
     */
    text: string;
    /**
     * Value used for evaluating logic expressions.
     */
    value: string;
  }[];
  /**
   * Human-readable question text, can be localized.
   */
  text: string;
  /**
   * Type of the question.
   */
  type: "select" | "multiselect";
}
/**
 * Represents a question with numeric answer.
 */
export interface NumericQuestion {
  /**
   * Optional human-readable details or clarifiation about this question.
   */
  details?: string;
  /**
   * Logic expression used to compute this variable. Defaults to true.
   */
  enableWhen?:
    | (
        | LogicIf
        | LogicReduce
        | LogicSome
        | LogicEquals
        | LogicGreaterEqual
        | LogicNot
        | LogicLessEqual
        | LogicPlus
        | LogicMinus
        | LogicAnd
        | LogicOr
        | LogicIn
        | LogicGreater
        | LogicLess
      )
    | {
        var: string;
      }
    | (number | string | boolean);
  /**
   * Unique id for referring this question in logic expressions.
   */
  id: string;
  /**
   * Option for numeric questions.
   * Answer options for Select/Multiselect questions.
   */
  numericOptions?: {
    /**
     * Default value
     */
    defaultValue?: number;
    /**
     * maximal value
     */
    max?: number;
    /**
     * Minimal value
     */
    min?: number;
    /**
     * Step size
     */
    step?: number;
  };
  /**
   * Boolean indicating whether the question is optional or not.
   */
  optional?: boolean;
  /**
   * Human-readable question text, can be localized.
   */
  text: string;
  /**
   * Type of the question.
   */
  type: "number";
}
