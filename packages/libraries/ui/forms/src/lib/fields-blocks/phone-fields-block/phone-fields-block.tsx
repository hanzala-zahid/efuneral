import { Person } from "@efuneral/models";
import { SummaryRow } from "@efuneral/ui/basic-components";
import { useFormContext } from "react-hook-form";
import PhoneField from "../../fields/phone-field/phone-field";
import { concatenateFieldPrefix } from "../field-name-prefix-concatenator";
import { FieldsBlockProps } from "../fields-block-props";
import { UNDEFINED_INPUT_SUMMARY_STRING } from "../undefined-input-summary-string";

export interface PhoneFieldsBlockProps extends FieldsBlockProps {}

export function PhoneFieldsBlock(props: PhoneFieldsBlockProps) {
  // Build field names
  const phoneFieldName = concatenateFieldPrefix<Person>('phone', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const phoneValue = watch(phoneFieldName);
  // Render
  if (props.summaryMode) {
    return (
      <SummaryRow
        labelString='Phone:'
        content={phoneValue ?? UNDEFINED_INPUT_SUMMARY_STRING}
      />
    )
  }
  return (
    <>
      <PhoneField
        fieldName={phoneFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default PhoneFieldsBlock;
