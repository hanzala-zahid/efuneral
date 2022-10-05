import { concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import SaveAndContinueButton from "../../controls/save-and-continue-button/save-and-continue-button";
import FormWrapper from "../../react-hook-form/form-wrapper/form-wrapper";
import FullFormCard from "../full-form-card/full-form-card";
import { FullFormProps } from "../full-form-props";

interface BeneficiariesFormValues { } // TODO - decide what shape this should be

export interface BeneficiariesFormProps extends FullFormProps<BeneficiariesFormValues> { }

export function BeneficiariesForm(props: BeneficiariesFormProps) {
  // Build form prefix
  const beneficiariesAriaLabelPrefix = 'beneficiaries';
  const ariaLabelPrefix = concatenateAriaLabelPieces(props.ariaLabelPrefix, beneficiariesAriaLabelPrefix);
  // Render
  return (
    <FullFormCard
      formName={'Add Beneficiary'}
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

export default BeneficiariesForm;
