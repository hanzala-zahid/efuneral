import { Address, addressValueTypes } from "../address/Address";
import { FormValueTypes } from "../form/FormValueTypes";
import { FullName, fullNameValueTypes } from "./FullName";
import { Gender } from "./Gender";

/*
    This model should not hold eFuneral specific fields, it should only hold things that you could describe about a person on the street
    (eg. Name, Date of birth, not "signing role")
*/
interface CompletePerson {
    name: FullName,
    address: Address,
    dateOfBirth: Date,
    gender: Gender,
    email: string,
    phone: string
}

export const personValueTypes: FormValueTypes<CompletePerson> = {
    name: fullNameValueTypes,
    address: addressValueTypes,
    dateOfBirth: 'date',
    gender: 'string',
    email: 'string',
    phone: 'string'
};

export type Person = Partial<CompletePerson>;
