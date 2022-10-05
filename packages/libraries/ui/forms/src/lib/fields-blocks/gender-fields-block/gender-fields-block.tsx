import { Person } from "@efuneral/models";
import { SummaryRow } from "@efuneral/ui/basic-components";
import { useFormContext } from "react-hook-form";
import GenderField from "../../fields/gender-field/gender-field";
import { concatenateFieldPrefix } from "../field-name-prefix-concatenator";
import { FieldsBlockProps } from "../fields-block-props";
import { UNDEFINED_INPUT_SUMMARY_STRING } from "../undefined-input-summary-string";

export interface GenderFieldsBlockProps extends FieldsBlockProps {}

export function GenderFieldsBlock(props: GenderFieldsBlockProps) {
  // Build field names
  const genderFieldName = concatenateFieldPrefix<Person>('gender', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const genderValue = watch(genderFieldName);
  // Render
  if (props.summaryMode) {
    return (
      <SummaryRow
        labelString='Gender:'
        content={genderValue ?? UNDEFINED_INPUT_SUMMARY_STRING}
      />
    )
  }
  return (
    <>
      <GenderField
        fieldName={genderFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default GenderFieldsBlock;
