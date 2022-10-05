import { Person } from "@efuneral/models";
import { SummaryRow } from "@efuneral/ui/basic-components";
import { useFormContext } from "react-hook-form";
import EmailField from "../../fields/email-field/email-field";
import { concatenateFieldPrefix } from "../field-name-prefix-concatenator";
import { FieldsBlockProps } from "../fields-block-props";
import { UNDEFINED_INPUT_SUMMARY_STRING } from "../undefined-input-summary-string";

export interface EmailFieldsBlockProps extends FieldsBlockProps {}

export function EmailFieldsBlock(props: EmailFieldsBlockProps) {
  // Build field names
  const emailFieldName = concatenateFieldPrefix<Person>('email', props.fieldNamePrefix)
  // Get field values
  const { watch } = useFormContext();
  const emailValue = watch(emailFieldName);
  // Render
  if (props.summaryMode) {
    return (
      <SummaryRow
        labelString='Email:'
        content={emailValue ?? UNDEFINED_INPUT_SUMMARY_STRING}
      />
    )
  }
  return (
    <>
      <EmailField
        fieldName={emailFieldName}
        ariaLabelPrefix={props.ariaLabelPrefix}
      />
    </>
  );
}

export default EmailFieldsBlock;
