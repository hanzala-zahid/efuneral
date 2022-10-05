import { PagePath } from "../../enums/PagePaths";

export type PagePathSearchParamTypes = {
    [PagePath.LOAD_SALES_ORDER_PAGE]: {
        salesOrderId: string
    },
    [PagePath.SALES_ORDER_LINK_TEST_PAGE]: {
        testParam: string
    },
}

export type PagePathSearchParams<T> =
    T extends PagePath.LOAD_SALES_ORDER_PAGE ? PagePathSearchParamTypes[PagePath.LOAD_SALES_ORDER_PAGE] :
    T extends PagePath.SALES_ORDER_LINK_TEST_PAGE ? PagePathSearchParamTypes[PagePath.SALES_ORDER_LINK_TEST_PAGE] :
    never;