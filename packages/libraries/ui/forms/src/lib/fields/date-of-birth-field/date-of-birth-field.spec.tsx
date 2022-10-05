import { act, render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ZipCodeField, { DateOfBirthField } from './date-of-birth-field';

describe('Date Of Birth Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText('customer date of birth')));
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer date of birth error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Requires valid value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer date of birth');
        userEvent.type(input, '555');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer date of birth error')).toBeTruthy());
        await waitFor(() => expect(onSave).toHaveBeenCalledTimes(0));
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer date of birth');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.type(input, '1990-10-01');
        await waitFor(() => expect(input).toHaveValue('1990-10-01'))
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            dateOfBirth: new Date('10/01/1990')
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
                dateOfBirth: 'date'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <DateOfBirthField
                ariaLabelPrefix={'customer'}
                fieldName={'dateOfBirth'}
            />
        </FormWrapper>
    );
}