import { concatenateAriaLabelPieces, LabeledTextbox } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";
import validator from 'validator';

export interface EmailFieldProps extends FieldProps { }

export function EmailField(props: EmailFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'email'),
    required: props.required ?? true,
    requiredMessage: 'Must provide email',
    validators: [{
      validation: validator.isEmail,
      message: 'Invalid email'
    }]
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Email'}
    />
  );
}

export default EmailField;
