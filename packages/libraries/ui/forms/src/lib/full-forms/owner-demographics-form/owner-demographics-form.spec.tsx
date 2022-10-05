import { Gender, GeographicState, Person } from "@efuneral/models";
import { render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom';
import { convertDateToRFC3339FullDate } from "packages/libraries/ui/basic-components/src/lib/inputs/base/base-date-picker/base-date-picker";
import userEvent from "@testing-library/user-event";
import { OwnerDemographicsForm } from "./owner-demographics-form";

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

describe('Owner Demographics Form', () => {
    it('Renders well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <OwnerDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={false}
                onEditClick={onEditClick}
            />
        );
        await waitFor(() => expect(screen.getByLabelText('funeral owner phone')).toHaveValue(startingValues.phone));
        await waitFor(() => expect(screen.getByLabelText('funeral owner first name')).toHaveValue(startingValues.name?.firstName));
        await waitFor(() => expect(screen.getByLabelText('funeral owner middle name')).toHaveValue(startingValues.name?.middleName));
        await waitFor(() => expect(screen.getByLabelText('funeral owner last name')).toHaveValue(startingValues.name?.lastName));
        await waitFor(() => expect(screen.getByLabelText('funeral owner address line one')).toHaveValue(startingValues.address?.addressLineOne));
        await waitFor(() => expect(screen.getByLabelText('funeral owner address line two')).toHaveValue(startingValues.address?.addressLineTwo));
        await waitFor(() => expect(screen.getByLabelText('funeral owner city')).toHaveValue(startingValues.address?.city));
        await waitFor(() => expect(screen.getByLabelText('funeral owner state')).toHaveValue(startingValues.address?.state));
        await waitFor(() => expect(screen.getByLabelText('funeral owner zip code')).toHaveValue(startingValues.address?.zip));
        await waitFor(() => expect(screen.getByLabelText('funeral owner gender')).toHaveValue(startingValues.gender));
        await waitFor(() => expect(screen.getByLabelText('funeral owner date of birth')).toHaveValue(convertDateToRFC3339FullDate(startingValues.dateOfBirth as Date)));
    });
    
    it('Saves well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <OwnerDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={false}
                onEditClick={onEditClick}
            />
        );
        const saveButton = await screen.findByLabelText('funeral owner save and continue');
        userEvent.click(saveButton);
        await waitFor(() => expect(onSave).toHaveBeenCalledWith(startingValues));
    });
    
    it('Edits well', async () => {
        const onSave = jest.fn();
        const onEditClick = jest.fn();
        render(
            <OwnerDemographicsForm
                values={startingValues}
                onSave={onSave}
                ariaLabelPrefix={"funeral"}
                summaryMode={true}
                onEditClick={onEditClick}
            />
        );
        const editButton = await screen.findByLabelText('funeral owner edit');
        userEvent.click(editButton);
        await waitFor(() => expect(onEditClick).toHaveBeenCalled());
    });
})