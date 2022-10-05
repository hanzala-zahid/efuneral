import { BaseCard, BaseCardHeader, BaseRequiredSymbol } from "@efuneral/ui/basic-components";
import { FullFormCardEditButton, FullFormCardEditButtonProps } from "./full-form-card-edit-button";

export interface FullFormCardProps extends FullFormCardEditButtonProps {
  children: React.ReactNode,
  formName: string,
  summaryMode: boolean,
}

export function FullFormCard(props: FullFormCardProps) {
  return (
    <BaseCard>
      <div>
        <BaseCardHeader>
          {props.formName}
        </BaseCardHeader>
        {props.summaryMode ? (
          <FullFormCardEditButton
            onEditClick={props.onEditClick}
            ariaLabelPrefix={props.ariaLabelPrefix}
          />
        ) : (
          <div>
            (<BaseRequiredSymbol />) Indicates required field
          </div>
        )}
      </div>
      {props.children}
    </BaseCard>
  );
}

export default FullFormCard;
