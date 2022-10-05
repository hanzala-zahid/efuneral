import { BaseButton, BaseEditSymbol, concatenateAriaLabelPieces } from "@efuneral/ui/basic-components"

export interface FullFormCardEditButtonProps {
    onEditClick: () => void,
    ariaLabelPrefix: string,
}

export const FullFormCardEditButton: React.FunctionComponent<FullFormCardEditButtonProps> = (props) => {
    return (
        <BaseButton
            onClick={props.onEditClick}
            ariaLabel={concatenateAriaLabelPieces(props.ariaLabelPrefix, 'edit')}
        >
            <BaseEditSymbol /> Edit
        </BaseButton>
    )
}