import { PaymentOption } from "@efuneral/models";
import { concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import SaveAndContinueButton from "../../controls/save-and-continue-button/save-and-continue-button";
import FormWrapper from "../../react-hook-form/form-wrapper/form-wrapper";
import FullFormCard from "../full-form-card/full-form-card";
import { FullFormProps } from "../full-form-props";
import { hashValue } from "../hash-value";

export interface PaymentOptionFormProps extends FullFormProps<PaymentOption | null> {
  /**
   * The payment options that the user can select between
   */
  availablePaymentOptions: PaymentOption[]
}

export function PaymentOptionForm(props: PaymentOptionFormProps) {
  // Calculate hash ids for payment options, so we can assign them to radio buttons
  const selectedOption = hashValue(props.values);
  // Build form prefix
  const paymentOptionsAriaLabelPrefix = 'payment options';
  const ariaLabelPrefix = concatenateAriaLabelPieces(props.ariaLabelPrefix, paymentOptionsAriaLabelPrefix);
  // Render
  return (
    <FullFormCard
      formName={'Payment Option'}
      onEditClick={props.onEditClick}
      summaryMode={props.summaryMode}
      ariaLabelPrefix={ariaLabelPrefix}
    >
      <FormWrapper
        values={{
          selectedOption: selectedOption
        }}
        valueTypes={{
          selectedOption: 'string'
        }}
        onSave={(values) => {
          const selectedPaymentOption = props.availablePaymentOptions.find(option => {
            return values.selectedOption === hashValue(option);
          });
          props.onSave(selectedPaymentOption ?? null);
        }}
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

export default PaymentOptionForm;
