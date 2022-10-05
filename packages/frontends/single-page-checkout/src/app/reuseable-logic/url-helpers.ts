import { PagePath } from "../static/enums/PagePaths";
import { PagePathSearchParams } from "../static/constants/url/search-params";
import { useNavigateToPathGeneric, useAllSearchParamsGeneric } from "@efuneral/react-router-wrapper";

export const useNavigateToPath = <T extends PagePath>(
    pagePath: T,
    searchParams: PagePathSearchParams<T>
) => useNavigateToPathGeneric(pagePath, searchParams);

export const useAllSearchParams = <T extends PagePath>(pagePath: T): PagePathSearchParams<T> => useAllSearchParamsGeneric(pagePath);