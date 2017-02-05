import baseUrl from "api/base-url";


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