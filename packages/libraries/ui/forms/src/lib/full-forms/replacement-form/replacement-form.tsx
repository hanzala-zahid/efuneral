import { concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import FinalizePurchaseButton from "../../controls/finalize-purchase-button/finalize-purchase-button";
import FormWrapper from "../../react-hook-form/form-wrapper/form-wrapper";
import FullFormCard from "../full-form-card/full-form-card";
import { FullFormProps } from "../full-form-props";

interface ReplacementFormValues { } // TODO - decide what shape this should be

export interface ReplacementFormProps extends FullFormProps<ReplacementFormValues> {}

export function ReplacementForm(props: ReplacementFormProps) {
  // Build form prefix
  const replacementAriaLabelPrefix = 'replacement';
  const ariaLabelPrefix = concatenateAriaLabelPieces(props.ariaLabelPrefix, replacementAriaLabelPrefix);
  // Render
  return (
    <FullFormCard
      formName={'Replacement'}
      onEditClick={props.onEditClick}
      summaryMode={props.summaryMode}
      ariaLabelPrefix={ariaLabelPrefix}
    >
      <FormWrapper
        values={props.values}
        valueTypes={{}}
        onSave={props.onSave}
        summaryMode={props.summaryMode}
        disabled={props.disabled ?? false}
        submissionButton={{
          component: FinalizePurchaseButton,
          ariaLabelPrefix: ariaLabelPrefix,
        }}
      >

      </FormWrapper>
    </FullFormCard>
  );
}

export default ReplacementForm;
