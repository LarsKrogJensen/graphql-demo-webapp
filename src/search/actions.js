// @flow
import * as types from "./action-types";


export const searchSuccess = (searchResult: Array<Object>) => (
    {
        type: types.SEARCH_SUCCESS,
        searchResult
    }
);


export const searchInit = (searchQuery: string) => (
    {
        type: types.SEARCH_INIT,
        searchQuery
    }
);


export const searchFailed = (error: string, error_description: string) => (
    {
        type: types.SEARCH_FAILED,
        error,
        error_description
    }
);

export function performSearch(token: string, searchQuery: string, graphQuery: (string, string)=> {}) {
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



