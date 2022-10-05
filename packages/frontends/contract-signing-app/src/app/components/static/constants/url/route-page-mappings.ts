import { RouteMapping } from "@efuneral/react-router-wrapper"
import ContractSigningPage from "../../../pages/contract-signing-page/contract-signing-page"
import { ContractLandingPage } from "../../../pages/landing-page/contract-landing-page"
import { PagePath } from "../../enums/PagePaths"

export const RoutePageMappings: RouteMapping<PagePath>[] = [
    {
        pageComponent: ContractLandingPage,
        pagePath: PagePath.CONTRACT_SIGNING_LANDING_PAGE
    },
    {
        pageComponent: ContractSigningPage,
        pagePath: PagePath.CONTRACT_SIGNING_PAGE
    }
]