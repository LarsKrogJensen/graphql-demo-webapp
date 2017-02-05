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

    // try {
        let response = await fetch(baseUrl + '/graphqlWW', options);
        if (response.ok)
            return response.json();

        throw new Error(response.statusText);
    // } catch (e) {
    //     throw e
    // }
}