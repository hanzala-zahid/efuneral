import { Person } from "@efuneral/models";
import { SummaryRow } from "@efuneral/ui/basic-components";
import { useFormContext } from "react-hook-form";
import DateOfBirthField from "../../fields/date-of-birth-field/date-of-birth-field";
import { concatenateFieldPrefix } from "../field-name-prefix-concatenator";
import { FieldsBlockProps } from "../fields-block-props";
import { UNDEFINED_INPUT_SUMMARY_STRING } from "../undefined-input-summary-string";

export interface DateOfBirthFieldsBlockProps extends FieldsBlockProps {}

const buildSummaryContent = (dateOfBirth: string) => {
  if(dateOfBirth) {
    const dateVersion = new Date(dateOfBirth.replace('-', '/'));
    let month = `${dateVersion.getMonth() + 1}`;
    let day = `${dateVersion.getDate()}`;
    let year = `${dateVersion.getFullYear()}`;
    if(month.length < 2) {
      month = `0${month}`;
    }
    if(day.length < 2) {
      day = `0${day}`;
    }
    return `${month}-${day}-${year}`
  }
  return UNDEFINED_INPUT_SUMMARY_STRING;
}

export function DateOfBirthFieldsBlock(props: DateOfBirthFieldsBlockProps) {
  // Build field names
  const dateOfBirthFieldName = concatenateFieldPrefix<Person>('dateOfBirth', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const dateOfBirthValue: string = watch(dateOfBirthFieldName);
  // Render
  if (props.summaryMode) {
    return (
      <SummaryRow
        labelString='Date of Birth:'
        content={buildSummaryContent(dateOfBirthValue)}
      />
    )
  }
  return (
    <>
      <DateOfBirthField
        fieldName={dateOfBirthFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default DateOfBirthFieldsBlock;
