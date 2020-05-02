import { Variable } from "../../models/questionnaire";
import { ElementEditor } from "./ElementEditor";
import React from "react";
import variableSchema from "./formEditorSchemas/variable.json";
import { convertLogicExpressionToString } from "./converters";
import { RootState, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { editVariable, variableInEditorSelector } from "../../store/questionnaireInEditor";
import { uiSchemaLogic, uiSchemaLogicReadOnly } from "./formEditorSchemas/uiSchemaLogic";

export type VariableInStringRepresentation = Omit<Variable, "expression"> & { expression: string };

type ElementEditorVariableProps = {
  index: number;
};

const uiSchema = {
  "ui:order": ["id", "valueString", "*"],
  expression: uiSchemaLogicReadOnly(),
  valueString: uiSchemaLogic(),
};

function convertToStringRepresentation(formData: Variable): VariableInStringRepresentation {
  return { ...formData, expression: convertLogicExpressionToString(formData?.expression) };
}

export function ElementEditorVariable(props: ElementEditorVariableProps) {
  const dispatch = useAppDispatch();

  const variable = useSelector((state: RootState) => variableInEditorSelector(state, props));

  const onChange = (formData: VariableInStringRepresentation, hasErrors: boolean) => {
    dispatch(editVariable({ index: props.index, changedVariable: formData, hasErrors: hasErrors }));
  };

  return (
    <ElementEditor
      schema={variableSchema as any}
      formData={convertToStringRepresentation(variable)}
      onChange={onChange}
      uiSchema={uiSchema}
    />
  );
}
