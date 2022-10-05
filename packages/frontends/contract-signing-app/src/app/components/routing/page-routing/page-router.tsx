import { ReactRoutingWrapper } from "@efuneral/react-router-wrapper";
import { RoutePageMappings } from "../../static/constants/url/route-page-mappings";

export interface PageRouterProps { }

export function PageRouter(props: PageRouterProps) {
  // Render
  return (
    <ReactRoutingWrapper
      mappings={RoutePageMappings}
    />
  );
}

export default PageRouter;
