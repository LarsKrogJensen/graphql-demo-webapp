



export async function graphQuery(queryParams, token)
{
    let response = await fetch('http://localhost:8080/graphql', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        credentials: 'include',
        body: JSON.stringify(queryParams),
    });

    if (response.status === 200) {
        return response.json();
    }

    return Promise.reject(response.statusText);

}