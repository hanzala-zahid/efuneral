import { FormValueTypes } from "../form/FormValueTypes";

interface CompleteFullName {
    firstName: string,
    middleName: string,
    lastName: string
};

export const fullNameValueTypes: FormValueTypes<FullName> = {
    firstName: 'string',
    middleName: 'string',
    lastName: 'string'
};

export type FullName = Partial<CompleteFullName>; 