import { BaseButton, concatenateAriaLabelPieces } from "@efuneral/ui/basic-components";
import { ControlButtonProps } from "../control-button-props";

export interface FinalizePurchaseButtonProps extends ControlButtonProps { }

export function FinalizePurchaseButton(props: FinalizePurchaseButtonProps) {
  return (
    <BaseButton
      ariaLabel={concatenateAriaLabelPieces(props.ariaLabelPrefix, 'finalize purchase')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Finalize Purchase
    </BaseButton>
  );
}

export default FinalizePurchaseButton;
