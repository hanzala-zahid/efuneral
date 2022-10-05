import { BaseButton, concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import { ControlButtonProps } from "../control-button-props";

export interface SaveAndContinueButtonProps extends ControlButtonProps { }

export function SaveAndContinueButton(props: SaveAndContinueButtonProps) {
  return (
    <BaseButton
      ariaLabel={concatenateAriaLabelPieces(props.ariaLabelPrefix, 'save and continue')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Save and Continue
    </BaseButton>
  );
}

export default SaveAndContinueButton;
