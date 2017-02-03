import store from "store";
import baseUrl from "api/base-url";
import * as searchActions from "actions/search-actions";

export async function search(token, queryParams) {
    try {
        let json = await graphQuery(token, queryParams);
        store.dispatch(searchActions.searchSuccess(json.data.listingSearch))
    } catch (e) {
        store.dispatch(searchActions.searchFailed({
            error: "Search failed",
            error_description: e.message
        }));
    }
}

export async function graphQuery(token, queryParams) {
    let options = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        credentials: 'include',
        body: queryParams,
    };

    let response = await fetch(baseUrl + '/graphql', options);
    return response.json();
}