import { concatenateAriaLabelPieces, LabeledDatePicker } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface DateOfBirthFieldProps extends FieldProps { }

export function DateOfBirthField(props: DateOfBirthFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'date of birth'),
    required: props.required ?? true,
    requiredMessage: 'Must provide date of birth',
    validators: [
      {
        validation: (date) => {
          if(date) {
            return (new Date(date)).getUTCFullYear() > 1899;
          }
          return true;
        },
        message: 'Date must be after 1900'
      },
      {
        validation: (date) => {
          if(date) {
            return (new Date(date)).getTime() < new Date().getTime();
          }
          return true;
        },
        message: 'Date must be before today'
      },
    ]
  });

  return (
    <LabeledDatePicker
      {...newInputProps}
      labelString={props.labelString ?? 'DOB'}
    />
  );
}

export default DateOfBirthField;
