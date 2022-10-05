import { concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import SaveAndContinueButton from "../../controls/save-and-continue-button/save-and-continue-button";
import FormWrapper from "../../react-hook-form/form-wrapper/form-wrapper";
import FullFormCard from "../full-form-card/full-form-card";
import { FullFormProps } from "../full-form-props";

interface PaymentMethodFormValues { } // TODO - decide what shape this should be

export interface PaymentMethodFormProps extends FullFormProps<PaymentMethodFormValues> {}

export function PaymentMethodForm(props: PaymentMethodFormProps) {
  // Build form prefix
  const paymentMethodAriaLabelPrefix = 'payment method';
  const ariaLabelPrefix = concatenateAriaLabelPieces(props.ariaLabelPrefix, paymentMethodAriaLabelPrefix);
  // Render
  return (
    <FullFormCard
      formName={'Payment Method'}
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
          component: SaveAndContinueButton,
          ariaLabelPrefix: ariaLabelPrefix,
        }}
      >

      </FormWrapper>
    </FullFormCard>
  );
}

export default PaymentMethodForm;
