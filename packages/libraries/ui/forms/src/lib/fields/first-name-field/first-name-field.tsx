import { concatenateAriaLabelPieces, LabeledTextbox } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface FirstNameFieldProps extends FieldProps {}

export function FirstNameField(props: FirstNameFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'first name'),
    required: props.required ?? true,
    requiredMessage: 'Must provide first name',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'First Name'}
    />
  );
}

export default FirstNameField;
