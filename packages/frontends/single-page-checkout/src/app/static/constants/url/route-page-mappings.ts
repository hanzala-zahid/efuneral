import { RouteMapping } from "@efuneral/react-router-wrapper"
import LoadSalesOrderPage from "../../../components/pages/load-sales-order-page/load-sales-order-page"
import SalesOrderLinkTestPage from "../../../components/pages/sales-order-link-test-page/sales-order-link-test-page"
import { PagePath } from "../../enums/PagePaths"

export const RoutePageMappings: RouteMapping<PagePath>[] = [
    {
        pageComponent: SalesOrderLinkTestPage,
        pagePath: PagePath.ROOT
    },
    {
        pageComponent: SalesOrderLinkTestPage,
        pagePath: PagePath.SALES_ORDER_LINK_TEST_PAGE
    },
    {
        pageComponent: LoadSalesOrderPage,
        pagePath: PagePath.LOAD_SALES_ORDER_PAGE
    },
]