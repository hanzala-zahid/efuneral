import { concatenateAriaLabelPieces, LabeledTextbox } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface LastNameFieldProps extends FieldProps {}

export function LastNameField(props: LastNameFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'last name'),
    required: props.required ?? true,
    requiredMessage: 'Must provide last name',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Last Name'}
    />
  );
}

export default LastNameField;
