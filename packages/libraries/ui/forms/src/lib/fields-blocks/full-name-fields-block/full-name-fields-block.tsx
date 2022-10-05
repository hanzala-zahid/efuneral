import { FullName } from "@efuneral/models"
import { SummaryRow } from "@efuneral/ui/basic-components"
import { useFormContext } from "react-hook-form"
import FirstNameField from "../../fields/first-name-field/first-name-field"
import LastNameField from "../../fields/last-name-field/last-name-field"
import MiddleNameField from "../../fields/middle-name-field/middle-name-field"
import { concatenateFieldPrefix } from "../field-name-prefix-concatenator"
import { FieldsBlockProps } from "../fields-block-props"
import { UNDEFINED_INPUT_SUMMARY_STRING } from "../undefined-input-summary-string"

export interface FullNameFieldsBlockProps extends FieldsBlockProps { }

const buildSummaryContent = (values: FullName) => {
  const pieces: string[] = [];
  if (values.firstName) {
    pieces.push(values.firstName);
  }
  if (values.middleName) {
    pieces.push(values.middleName);
  }
  if (values.lastName) {
    pieces.push(values.lastName);
  }
  if(pieces.length === 0) {
    return UNDEFINED_INPUT_SUMMARY_STRING;
  }
  return pieces.join(' ');
}

export function FullNameFieldsBlock(props: FullNameFieldsBlockProps) {
  // Build field names
  const firstNameFieldName = concatenateFieldPrefix<FullName>('firstName', props.fieldNamePrefix)
  const middleNameFieldName = concatenateFieldPrefix<FullName>('middleName', props.fieldNamePrefix)
  const lastNameFieldName = concatenateFieldPrefix<FullName>('lastName', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const firstNameValue = watch(firstNameFieldName);
  const middleNameValue = watch(middleNameFieldName);
  const lastNameValue = watch(lastNameFieldName);
  // Render
  if (props.summaryMode) {
    return (
      <SummaryRow
        labelString='Name:'
        content={buildSummaryContent({
          firstName: firstNameValue,
          middleName: middleNameValue,
          lastName: lastNameValue,
        })}
      />
    )
  }
  return (
    <>
      <FirstNameField
        fieldName={firstNameFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <MiddleNameField
        fieldName={middleNameFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
      <LastNameField
        fieldName={lastNameFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default FullNameFieldsBlock;
