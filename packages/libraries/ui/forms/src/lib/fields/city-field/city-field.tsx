import { concatenateAriaLabelPieces, LabeledTextbox } from '@efuneral/ui/basic-components';
import { useFieldRegister } from '../../react-hook-form/field-register-hook';
import { FieldProps } from '../field-props';

export interface CityFieldProps extends FieldProps { }

export function CityField(props: CityFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'city'),
    required: props.required ?? true,
    requiredMessage: 'Must provide city',
  });

  return (
    <LabeledTextbox
      {...newInputProps}
      labelString={props.labelString ?? 'City'}
    />
  );
}

export default CityField;