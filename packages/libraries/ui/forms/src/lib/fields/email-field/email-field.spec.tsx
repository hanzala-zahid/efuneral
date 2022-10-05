import { render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import EmailField from './email-field';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

describe('Email Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText('customer email')));
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer email error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer email');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.clear(input);
        userEvent.type(input, 'noreply@efuneral.com');
        await waitFor(() => expect(input).toHaveValue('noreply@efuneral.com'))
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            email: 'noreply@efuneral.com'
        }));
    })
    it('Requires valid value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer email');
        userEvent.type(input, 'qwerty');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer email error')).toBeTruthy());
        await waitFor(() => expect(onSave).toHaveBeenCalledTimes(0));
    })
})

const renderField = (
    onSave: () => void
) => {
    render(
        <FormWrapper
            values={{}}
            valueTypes={{
                email: 'string'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <EmailField
                ariaLabelPrefix={'customer'}
                fieldName={'email'}
            />
        </FormWrapper>
    );
}