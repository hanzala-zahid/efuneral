import { Address } from '@efuneral/models';
import { SummaryRow } from '@efuneral/ui/basic-components';
import { useFormContext } from 'react-hook-form';
import AddressLineOneField from '../../fields/address-line-one-field/address-line-one-field';
import AddressLineTwoField from '../../fields/address-line-two-field/address-line-two-field';
import CityField from '../../fields/city-field/city-field';
import GeographicStateField from '../../fields/geographic-state-field/geographic-state-field';
import ZipCodeField from '../../fields/zip-code-field/zip-code-field';
import { concatenateFieldPrefix } from '../field-name-prefix-concatenator';
import { FieldsBlockProps } from '../fields-block-props';
import { UNDEFINED_INPUT_SUMMARY_STRING } from '../undefined-input-summary-string';

const buildSummaryContent = (values: Address) => {
  let pieces: string[] = [];
  if(values.addressLineOne) {
    pieces.push(values.addressLineOne)
  }
  if(values.addressLineTwo) {
    pieces.push(values.addressLineTwo)
  }
  if(values.city) {
    pieces.push(values.city)
  }
  if(values.state) {
    pieces.push(values.state)
  }
  if(values.zip) {
    pieces.push(values.zip)
  }
  if(pieces.length === 0) {
    return UNDEFINED_INPUT_SUMMARY_STRING;
  }
  return pieces.join(', ');
}

export interface AddressFieldsBlockProps extends FieldsBlockProps { }

export function AddressFieldsBlock(props: AddressFieldsBlockProps) {
  // Build field names
  const addressLineOneFieldName = concatenateFieldPrefix<Address>('addressLineOne', props.fieldNamePrefix)
  const addressLineTwoFieldName = concatenateFieldPrefix<Address>('addressLineTwo', props.fieldNamePrefix)
  const cityFieldName = concatenateFieldPrefix<Address>('city', props.fieldNamePrefix)
  const stateFieldName = concatenateFieldPrefix<Address>('state', props.fieldNamePrefix)
  const zipFieldName = concatenateFieldPrefix<Address>('zip', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const addressLineOneValue = watch(addressLineOneFieldName);
  const addressLineTwoFieldValue = watch(addressLineTwoFieldName);
  const cityFieldValue = watch(cityFieldName);
  const stateFieldValue = watch(stateFieldName);
  const zipFieldValue = watch(zipFieldName);
  // Render
  if(props.summaryMode) {
    return (
      <SummaryRow
        labelString='Address:'
        content={buildSummaryContent({
          addressLineOne: addressLineOneValue,
          addressLineTwo: addressLineTwoFieldValue,
          city: cityFieldValue,
          state: stateFieldValue,
          zip: zipFieldValue,
        })}
      />
    )
  }
  return (
    <>
      <AddressLineOneField
        fieldName={addressLineOneFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <AddressLineTwoField
        fieldName={addressLineTwoFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <CityField
        fieldName={cityFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <GeographicStateField
        fieldName={stateFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <ZipCodeField
        fieldName={zipFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default AddressFieldsBlock;
