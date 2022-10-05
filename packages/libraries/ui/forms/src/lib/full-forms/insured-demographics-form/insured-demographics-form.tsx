import { Person, personValueTypes } from '@efuneral/models';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import AddressFieldsBlock from '../../fields-blocks/address-fields-block/address-fields-block';
import DateOfBirthFieldsBlock from '../../fields-blocks/date-of-birth-fields-block/date-of-birth-fields-block';
import EmailFieldsBlock from '../../fields-blocks/email-fields-block/email-fields-block';
import FullNameFieldsBlock from '../../fields-blocks/full-name-fields-block/full-name-fields-block';
import GenderFieldsBlock from '../../fields-blocks/gender-fields-block/gender-fields-block';
import PhoneFieldsBlock from '../../fields-blocks/phone-fields-block/phone-fields-block';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import FullFormCard from '../full-form-card/full-form-card';
import { FullFormProps } from '../full-form-props';

export interface InsuredDemographicsFormProps extends FullFormProps<Person> { }

const insuredAriaLabelPrefix = 'insured';
const addressFieldsPrefix: keyof Person = 'address';
const fullNameFieldsPrefix: keyof Person = 'name';

export function InsuredDemographicsForm(props: InsuredDemographicsFormProps) {
  // Build form prefix
  const ariaLabelPrefix = `${props.ariaLabelPrefix} ${insuredAriaLabelPrefix}`;
  // Render
  return (
    <FullFormCard
      formName={'Insured Information'}
      onEditClick={props.onEditClick}
      summaryMode={props.summaryMode}
      ariaLabelPrefix={ariaLabelPrefix}
    >
      <FormWrapper
        values={props.values}
        valueTypes={personValueTypes}
        onSave={props.onSave}
        summaryMode={props.summaryMode}
        disabled={props.disabled ?? false}
        submissionButton={{
          component: SaveAndContinueButton,
          ariaLabelPrefix: ariaLabelPrefix,
        }}
      >
        <FullNameFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
          fieldNamePrefix={fullNameFieldsPrefix}
        />
        <EmailFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
        />
        <PhoneFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
        />
        <AddressFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
          fieldNamePrefix={addressFieldsPrefix}
        />
        <GenderFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
        />
        <DateOfBirthFieldsBlock
          ariaLabelPrefix={ariaLabelPrefix}
          summaryMode={props.summaryMode}
        />
      </FormWrapper>
    </FullFormCard>
  );
}

export default InsuredDemographicsForm;
