import { concatenateAriaLabelPieces, LabeledTextbox } from '@efuneral/ui/basic-components';
import { useFieldRegister } from '../../react-hook-form/field-register-hook';
import { FieldProps } from '../field-props';

export interface ZipCodeFieldProps extends FieldProps { }

export function ZipCodeField(props: ZipCodeFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'phone'),
    required: props.required ?? true,
    requiredMessage: 'Must provide zip code',
    validators: [{
      validation: /^\d\d\d\d\d$|^$/,
      message: 'Invalid zip code'
    }]
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Zip'}
      normalizer={(zipCode) => {
        const digitsOnly = zipCode.replace(/\D/g, '');
        const firstFive = digitsOnly.substring(0, 5);
        return firstFive;
      }}
    />
  );
}

export default ZipCodeField;
