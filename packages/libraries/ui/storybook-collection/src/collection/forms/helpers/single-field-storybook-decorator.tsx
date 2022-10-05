import { FormWrapper } from "@efuneral/ui/forms"
import SaveAndContinueButton from "packages/libraries/ui/forms/src/lib/controls/save-and-continue-button/save-and-continue-button"

export const singleFieldStorybookDecorator = (Story: React.FunctionComponent, options: any) => {
    return (
        <FormWrapper
            valueTypes={{}}
            values={{}}
            onSave={(data) => {console.log(data)}}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: ''
            }}
            disabled={false}
            summaryMode={options?.args?.summaryMode ?? false}
        >
            <Story />
        </FormWrapper>
    );
}