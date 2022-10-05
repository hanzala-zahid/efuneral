import { act, render, screen, waitFor } from '@testing-library/react';
import SaveAndContinueButton from '../../controls/save-and-continue-button/save-and-continue-button';
import FormWrapper from '../../react-hook-form/form-wrapper/form-wrapper';
import PurchasingForField from './purchasing-for-field';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { PlanningFor } from '@efuneral/models';

describe('PurchasingFor Field', () => {
    it('Renders', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        await waitFor(() => expect(screen.getByLabelText(`customer purchasing for ${PlanningFor.SELF}`)).toBeTruthy());
    })
    it('Requires value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(screen.getByLabelText('customer purchasing for error')).toBeTruthy());
        expect(onSave).toBeCalledTimes(0);
    })
    it('Saves value', async () => {
        const onSave = jest.fn();
        renderField(onSave);
        const planningForSelfButton = await screen.findByLabelText(`customer purchasing for ${PlanningFor.SELF}`);
        userEvent.click(planningForSelfButton);
        await waitFor(() => expect(planningForSelfButton).toBeChecked());
        const saveButton = await screen.findByLabelText('customer save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith({
            purchasingFor: PlanningFor.SELF
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
                purchasingFor: 'string'
            }}
            onSave={onSave}
            disabled={false}
            submissionButton={{
                component: SaveAndContinueButton,
                ariaLabelPrefix: 'customer'
            }}
            summaryMode={false}
        >
            <PurchasingForField
                ariaLabelPrefix={'customer'}
                fieldName={'purchasingFor'}
            />
        </FormWrapper>
    );
}