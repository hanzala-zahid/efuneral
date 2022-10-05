import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export interface SearchParamsStringDictionary {
    [name: string]: string
}

export const useAllSearchParamsGeneric = <PagePath extends string, SearchParams extends object>(pagePath: PagePath): SearchParams => {
    // Get search params from react-router-dom
    const searchParams = useSearchParams()[0];
    // Keep all search params up to date
    const [currentSearchParams, setCurrentSearchParams] = useState<SearchParamsStringDictionary>({});
    useEffect(() => {
        const newSearchParams: SearchParamsStringDictionary = {};
        searchParams.forEach((paramValue, paramKey) => {
            newSearchParams[paramKey] = paramValue;
        });
        // Don't update and rerender if we don't need to
        if(JSON.stringify(newSearchParams) !== JSON.stringify(currentSearchParams)) {
            setCurrentSearchParams(newSearchParams);
        }
    }, [searchParams]);
    // Give requester the list of search params
    return currentSearchParams as SearchParams;
}