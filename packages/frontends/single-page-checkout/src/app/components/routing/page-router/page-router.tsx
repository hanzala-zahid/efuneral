import { ReactRoutingWrapper } from "@efuneral/react-router-wrapper";
import { useEffect } from "react";
import { useStylingConfiguration } from "../../../state/generic/styling/StylingConfiguration";
import { RoutePageMappings } from "../../../static/constants/url/route-page-mappings";
import { VALID_PATH_PREFIXES } from "../../../static/constants/url/valid-path-prefixes";
import { PagePath } from "../../../static/enums/PagePaths";

export interface PageRouterProps {}

export function PageRouter(props: PageRouterProps) {
  // Calculate which url prefixes are valid (www.example.com/[PREFIX]/actualPage)
  const routingPrefixes = ['/'];
  const [stylingConfiguration, setStylingConfiguration] = useStylingConfiguration();
  if(stylingConfiguration.subdomain) {
    routingPrefixes.push(`/${stylingConfiguration.subdomain}`)
  }
  VALID_PATH_PREFIXES.forEach(prefix => {
    routingPrefixes.push(prefix)
  })
  // Find out what subdomain we're working on, and add to valid path prefixes
  useEffect(() => {
    const possibleSubdomain = window?.location?.pathname?.split('/')?.at(1);
    // Only set the subdomain if it exists, it's not a predefined path prefix, and it's not equivalend to a page path
    if(
      possibleSubdomain &&
      !VALID_PATH_PREFIXES.some(prefix => prefix === `/${possibleSubdomain}`) &&
      !Object.keys(PagePath).some(key => PagePath[key as keyof typeof PagePath] === `/${possibleSubdomain}`)
      ) {
      setStylingConfiguration({
        subdomain: possibleSubdomain
      })
    }
  }, [setStylingConfiguration])
  // Render
  return (
    <ReactRoutingWrapper
      mappings={RoutePageMappings}
      routingPrefixes={routingPrefixes}
    />
  );
}

export default PageRouter;
