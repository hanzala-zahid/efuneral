import { concatenateAriaLabelPieces, LabeledTextbox } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface MiddleNameFieldProps extends FieldProps {}

export function MiddleNameField(props: MiddleNameFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'middle name'),
    required: props.required ?? false,
    requiredMessage: 'Must provide middle name',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Middle Name'}
    />
  );
}

export default MiddleNameField;
