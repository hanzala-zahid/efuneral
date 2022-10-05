import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseRadioGroup from "./base-radio-group";

describe('Base Radio Group', () => {
    it('Renders well', async () => {
        const innerRef = jest.fn();
        const onChange = jest.fn();
        const onBlur = jest.fn();
        renderBaseRadioGroup(
            innerRef,
            onChange,
            onBlur,
        );
        await waitFor(() => expect(screen.getByLabelText('testAriaLabel testAriaLabel1')).toBeTruthy());
        await waitFor(() => expect(screen.getByLabelText('testAriaLabel testAriaLabel2')).toBeTruthy());
    })
    it('Changes well', async () => {
        const innerRef = jest.fn();
        const onChange = jest.fn();
        const onBlur = jest.fn();
        renderBaseRadioGroup(
            innerRef,
            onChange,
            onBlur,
        );
        const firstOption = await screen.findByLabelText('testAriaLabel testAriaLabel1');
        userEvent.click(firstOption);
        await waitFor(() => expect(onChange).toHaveBeenCalled());
    })
});

const renderBaseRadioGroup = (
    innerRef: any,
    onChange: any,
    onBlur: any
) => {
    render(
        <BaseRadioGroup
            ariaLabel={"testAriaLabel"}
            id={"testId"}
            innerRef={innerRef}
            htmlInputProps={{
                onChange,
                onBlur,
                name: 'testInputName',
            }}
            displayValues={[
                {
                    ariaLabelSuffix: 'testAriaLabel1',
                    display: 'testDisplay1',
                    value: 'testValue1',
                },
                {
                    ariaLabelSuffix: 'testAriaLabel2',
                    display: 'testDisplay2',
                    value: 'testValue2',
                }
            ]}
        />
    )
}