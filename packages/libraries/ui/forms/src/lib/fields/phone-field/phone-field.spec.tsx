import { act, render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import PhoneField from './phone-field';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

describe('Phone Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText('customer phone')));
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer phone error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Requires valid value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer phone');
        userEvent.type(input, '555555');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer phone error')).toBeTruthy());
        await waitFor(() => expect(onSave).toHaveBeenCalledTimes(0));
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer phone');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.type(input, '555a 55we 55555');
        await waitFor(() => expect(input).toHaveValue('555-555-5555'))
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            phone: '555-555-5555'
        }));
    })
})

const renderField = (
    onSave: () => void
) => {
    render(
        <FormWrapper
            values={{}}
            valueTypes={{
                phone: 'string'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <PhoneField
                ariaLabelPrefix={'customer'}
                fieldName={'phone'}
            />
        </FormWrapper>
    );
}