import { concatenateAriaLabelPieces, LabeledTextbox } from '@efuneral/ui/basic-components';
import { useFieldRegister } from '../../react-hook-form/field-register-hook';
import { FieldProps } from '../field-props';

export interface AddressLineTwoFieldProps extends FieldProps { }

export function AddressLineTwoField(props: AddressLineTwoFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'address line two'),
    required: props.required ?? false,
    requiredMessage: 'Must provide address line 2',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'Address 2'}
    />
  );
}

export default AddressLineTwoField;