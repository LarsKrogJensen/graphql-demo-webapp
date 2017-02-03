import store from "store";
import baseUrl from "api/base-url";
import * as searchActions from "actions/search-actions";

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
    try {
        let response = await fetch(baseUrl + '/graphql', options);

        if (response.status === 200) {
            let json = await response.json();
            store.dispatch(searchActions.searchSuccess(json.data.listingSearch))
        } else {
            store.dispatch(searchActions.searchFailed({
                error: "Search failed",
                error_description: response.statusText
            }));
        }
    } catch (e) {
        store.dispatch(searchActions.searchFailed({
            error: "Search failed",
            error_description: e.message
        }));
    }


}