import { BaseButton } from "@efuneral/ui/basic-components";
import { useNavigateToPath } from "../../../reuseable-logic/url-helpers";
import { PagePath } from "../../../static/enums/PagePaths";

export function SalesOrderLinkTestPage() {
  const navigateToLoadSalesOrderPage = useNavigateToPath(PagePath.LOAD_SALES_ORDER_PAGE, {
    salesOrderId: 'qwerty'
  })
  return (
    <>
      <BaseButton
        ariaLabel={"navigate"}
        onClick={navigateToLoadSalesOrderPage}
      >
        Navigate to Sale
      </BaseButton>
    </>
  );
}

export default SalesOrderLinkTestPage;