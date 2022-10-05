import { concatenateAriaLabelPieces, LabeledTextbox } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";
import validator from 'validator';

export interface PhoneFieldProps extends FieldProps { }

export function PhoneField(props: PhoneFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'phone'),
    required: props.required ?? true,
    requiredMessage: 'Must provide phone',
    validators: [{
      validation: (phone) => validator.isMobilePhone(phone, 'en-US'),
      message: 'Invalid phone'
    }]
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Phone'}
      normalizer={(phone) => {
        const digitsOnly = phone.replace(/\D/g, '');
        const firstTen = digitsOnly.substring(0, 10);
        const phonePieces: string[] = [];
        phonePieces.push(firstTen.substring(0, 3));
        phonePieces.push(firstTen.substring(3, 6));
        phonePieces.push(firstTen.substring(6, 10));
        let formattedValue = '';
        formattedValue += phonePieces[0];
        if (phonePieces[1]) {
          formattedValue += `-${phonePieces[1]}`;
        }
        if (phonePieces[2]) {
          formattedValue += `-${phonePieces[2]}`;
        }
        return formattedValue;
      }}
    />
  );
}

export default PhoneField;
