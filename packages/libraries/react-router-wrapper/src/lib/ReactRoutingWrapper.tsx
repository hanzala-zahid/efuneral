import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

export interface RouteMapping<PagePath extends string> {
    pageComponent: React.FunctionComponent,
    pagePath: PagePath
};

interface ReactRoutingWrapperProps<PagePath extends string> {
    routingPrefixes?: string[],
    mappings: RouteMapping<PagePath>[]
}

export function ReactRoutingWrapper<PagePath extends string>(props: ReactRoutingWrapperProps<PagePath>) {
    return (
        <>
          {[...(props.routingPrefixes ?? ['/'])].map(validPathPrefix => (
            <BrowserRouter basename={validPathPrefix} key={validPathPrefix}>
              <Routes>
                {props.mappings.map(routePageMapping => {
                  const PageComponent = routePageMapping.pageComponent;
                  const pagePath = routePageMapping.pagePath;
                  return (
                    <Route path={pagePath} key={pagePath} element={<PageComponent />} />
                  )
                })}
              </Routes>
            </BrowserRouter>
          ))}
        </>
      );
}