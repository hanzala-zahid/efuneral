import { concatenateAriaLabelPieces, LabeledTextbox } from '@efuneral/ui/basic-components';
import { useFieldRegister } from '../../react-hook-form/field-register-hook';
import { FieldProps } from '../field-props';

export interface AddressLineOneFieldProps extends FieldProps { }

export function AddressLineOneField(props: AddressLineOneFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'address line one'),
    required: props.required ?? true,
    requiredMessage: 'Must provide address',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Address'}
    />
  );
}

export default AddressLineOneField;