// @flow
import * as types from "./action-types";
import type  {SearchSuccessAction,SearchFailedAction, SearchInitAction} from "./action-types"
//import type {SearchItem} from "../declares/generated";

export function searchSuccess(searchResult: Array<SearchItem>) : SearchSuccessAction {
    return (
        {
            type: types.SEARCH_SUCCESS,
            searchResult
        }
    );
}

export const searchInit = (searchQuery: string) : SearchInitAction => (
    {
        type: types.SEARCH_INIT,
        searchQuery
    }
);

export const searchFailed = (error: string, error_description: string) : SearchFailedAction => (
    {
        type: types.SEARCH_FAILED,
        error,
        error_description
    }
);

export function performSearch(token: string, searchQuery: string, graphQuery: (string, string) => any) : Promise<any> {
    let query = JSON.stringify({
        query: `{ 
                   listingSearch(searchQuery: "${searchQuery}") 
                   { 
                      id 
                      score
                      name 
                      longName
                   }
                } 
         }`
    });

    return graphQuery(token, query);
}



