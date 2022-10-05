import { concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import SaveAndContinueButton from "../../controls/save-and-continue-button/save-and-continue-button";
import FormWrapper from "../../react-hook-form/form-wrapper/form-wrapper";
import FullFormCard from "../full-form-card/full-form-card";
import { FullFormProps } from "../full-form-props";

interface IrrevocabilityFormValues { } // TODO - decide what shape this should be

export interface IrrevocabilityFormProps extends FullFormProps<IrrevocabilityFormValues> {}

export function IrrevocabilityForm(props: IrrevocabilityFormProps) {
  // Build form prefix
  const irrevocabilityAriaLabelPrefix = 'irrevocability';
  const ariaLabelPrefix = concatenateAriaLabelPieces(props.ariaLabelPrefix, irrevocabilityAriaLabelPrefix);
  // Render
  return (
    <FullFormCard
      formName={'Would you like to make your policy irrecovable?'}
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

export default IrrevocabilityForm;