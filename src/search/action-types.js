//@flow
// import type {SearchItem} from "../flow-typed/generated";

export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export type SearchSuccessAction =
{
    type: typeof SEARCH_SUCCESS;
    searchResult: Array<SearchItem>;
}

export type SearchFailedAction =
{
    type: typeof SEARCH_FAILED;
    error: string;
    error_description: string;
}

export type SearchInitAction =
{
    type: typeof SEARCH_INIT;
    searchQuery: string;
}

export type SearchAction = SearchSuccessAction | SearchFailedAction | SearchInitAction
