import { PagePath } from "../../enums/PagePaths";

export type PagePathSearchParamTypes = {
    [PagePath.CONTRACT_SIGNING_LANDING_PAGE]: {
        signingCredential: string
    },
    [PagePath.CONTRACT_SIGNING_PAGE]: {
        signingCredential: string
    },
}

export type PagePathSearchParams<T> =
    T extends PagePath.CONTRACT_SIGNING_LANDING_PAGE ? PagePathSearchParamTypes[PagePath.CONTRACT_SIGNING_LANDING_PAGE] :
    T extends PagePath.CONTRACT_SIGNING_PAGE ? PagePathSearchParamTypes[PagePath.CONTRACT_SIGNING_PAGE] :
    never;