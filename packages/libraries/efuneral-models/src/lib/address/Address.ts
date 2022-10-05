import { FormValueTypes } from "../form/FormValueTypes";
import { GeographicState } from "./GeographicState";

interface CompleteAddress {
    addressLineOne: string,
    addressLineTwo: string,
    city: string,
    state: GeographicState,
    zip: string
}

export const addressValueTypes: FormValueTypes<CompleteAddress> = {
    addressLineOne: 'string',
    addressLineTwo: 'string',
    city: 'string',
    state: 'string',
    zip: 'string'
}

export type Address = Partial<CompleteAddress>; 