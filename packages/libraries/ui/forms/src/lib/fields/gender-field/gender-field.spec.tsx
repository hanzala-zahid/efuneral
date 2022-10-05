import { act, render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import GenderField from './gender-field';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Gender } from '@efuneral/models';

describe('Gender Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText('customer gender')));
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer gender error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const input = await screen.findByLabelText('customer gender');
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.selectOptions(input, Gender.FEMALE);
        await waitFor(() => expect(input).toHaveValue(Gender.FEMALE))
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            gender: Gender.FEMALE
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
                gender: 'string'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <GenderField
                ariaLabelPrefix={'customer'}
                fieldName={'gender'}
            />
        </FormWrapper>
    );
}