import { useCallback } from "react";
import { useNavigate } from "react-router"
import { stringify as stringifySearchParams } from 'query-string';

export const useNavigateToPathGeneric = <PagePath extends string, SearchParams extends object>(
    pagePath: PagePath,
    searchParams: SearchParams
): () => void => {
    const navigate = useNavigate();
    const stringifiedSearchParams = stringifySearchParams(searchParams)
    const navigationCallback = useCallback(() => {
        navigate(`${pagePath}?${stringifiedSearchParams}`)
    }, [pagePath, searchParams]);
    return navigationCallback;
}