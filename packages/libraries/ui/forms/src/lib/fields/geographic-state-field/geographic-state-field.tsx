import { GeographicState } from '@efuneral/models';
import { concatenateAriaLabelPieces, LabeledDropdown } from '@efuneral/ui/basic-components';
import { useFieldRegister } from '../../react-hook-form/field-register-hook';
import { FieldProps } from '../field-props';

export interface GeographicStateFieldProps extends FieldProps { }

export function GeographicStateField(props: GeographicStateFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'state'),
    required: props.required ?? true,
    requiredMessage: 'Must provide state',
  });

  return (
    <LabeledDropdown
      {...newInputProps}
      labelString={props.labelString ?? 'State'}
      displayValues={Object.keys(GeographicState).map(key => ({
        display: GeographicState[key as keyof typeof GeographicState],
        value: GeographicState[key as keyof typeof GeographicState],
        ariaLabel: key
      }))}
    />
  );
}

export default GeographicStateField;
