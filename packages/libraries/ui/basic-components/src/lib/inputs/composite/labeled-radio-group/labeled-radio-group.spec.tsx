import { render, waitFor, screen } from '@testing-library/react';
import LabeledRadioGroup from './labeled-radio-group';

describe('Labeled Radio Group', () => {
    it('Renders well', async () => {
        const innerRef = jest.fn();
        const onChange = jest.fn();
        const onBlur = jest.fn();
        renderCompositeField(innerRef, onChange, onBlur);
        await waitFor(() => expect(screen.findByText('testLabel')).toBeTruthy());
        await waitFor(() => expect(screen.findByLabelText('testAriaLabel testAriaLabel1')).toBeTruthy());
        await waitFor(() => expect(screen.findByLabelText('testAriaLabel testAriaLabel2')).toBeTruthy());
    })
});

const renderCompositeField = (
    innerRef: any,
    onChange: any,
    onBlur: any,
) => {
    render(
        <LabeledRadioGroup
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
            labelString={'testLabel'}
            inputProps={{
                ariaLabel: 'testAriaLabel',
                innerRef: innerRef,
                htmlInputProps: {
                    onChange: onChange,
                    onBlur: onBlur,
                    name: 'testInputName',
                }
            }}
        />
    );
}