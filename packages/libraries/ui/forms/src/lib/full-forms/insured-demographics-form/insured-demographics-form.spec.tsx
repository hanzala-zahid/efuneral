import { Gender, GeographicState, Person } from "@efuneral/models";
import { render, screen, waitFor } from "@testing-library/react"
import InsuredDemographicsForm from "./insured-demographics-form"
import '@testing-library/jest-dom';
import { convertDateToRFC3339FullDate } from "packages/libraries/ui/basic-components/src/lib/inputs/base/base-date-picker/base-date-picker";
import userEvent from "@testing-library/user-event";

const startingValues: Person = {
    name: {
        firstName: 'first',
        middleName: 'middle',
        lastName: 'last'
    },
    address: {
        addressLineOne: '555',
        addressLineTwo: '',
        city: 'city',
        state: GeographicState.IOWA,
        zip: '55555'
    },
    dateOfBirth: new Date('1990/10/01'),
    email: 'fake@fake.com',
    phone: '555-555-5555',
    gender: Gender.FEMALE
}

describe('Insured Demographics Form', () => {
    it('Renders well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <InsuredDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={false}
                onEditClick={onEditClick}
            />
        );
        await waitFor(() => expect(screen.getByLabelText('funeral insured phone')).toHaveValue(startingValues.phone));
        await waitFor(() => expect(screen.getByLabelText('funeral insured first name')).toHaveValue(startingValues.name?.firstName));
        await waitFor(() => expect(screen.getByLabelText('funeral insured middle name')).toHaveValue(startingValues.name?.middleName));
        await waitFor(() => expect(screen.getByLabelText('funeral insured last name')).toHaveValue(startingValues.name?.lastName));
        await waitFor(() => expect(screen.getByLabelText('funeral insured address line one')).toHaveValue(startingValues.address?.addressLineOne));
        await waitFor(() => expect(screen.getByLabelText('funeral insured address line two')).toHaveValue(startingValues.address?.addressLineTwo));
        await waitFor(() => expect(screen.getByLabelText('funeral insured city')).toHaveValue(startingValues.address?.city));
        await waitFor(() => expect(screen.getByLabelText('funeral insured state')).toHaveValue(startingValues.address?.state));
        await waitFor(() => expect(screen.getByLabelText('funeral insured zip code')).toHaveValue(startingValues.address?.zip));
        await waitFor(() => expect(screen.getByLabelText('funeral insured gender')).toHaveValue(startingValues.gender));
        await waitFor(() => expect(screen.getByLabelText('funeral insured date of birth')).toHaveValue(convertDateToRFC3339FullDate(startingValues.dateOfBirth as Date)));
    });
    
    it('Saves well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <InsuredDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={false}
                onEditClick={onEditClick}
            />
        );
        const saveButton = await screen.findByLabelText('funeral insured save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith(startingValues));
    });
    
    it('Edits well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <InsuredDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={true}
                onEditClick={onEditClick}
            />
        );
        const editButton = await screen.findByLabelText('funeral insured edit');
        userEvent.click(editButton);
        await waitFor(() => expect(onEditClick).toHaveBeenCalled());
    });
})