import { act, render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ZipCodeField from './zip-code-field';

describe('Zip Code Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText('customer zip code')));
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer zip code error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Requires valid value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer zip code');
        userEvent.type(input, '555');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer zip code error')).toBeTruthy());
        await waitFor(() => expect(onSave).toHaveBeenCalledTimes(0));
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer zip code');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.type(input, '555a 55we 55555');
        await waitFor(() => expect(input).toHaveValue('55555'))
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            zipCode: '55555'
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
                zipCode: 'string'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <ZipCodeField
                ariaLabelPrefix={'customer'}
                fieldName={'zipCode'}
            />
        </FormWrapper>
    );
}