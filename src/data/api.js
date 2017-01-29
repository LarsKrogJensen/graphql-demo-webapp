// const baseUrL: string = "https://larskj-gql.herokuapp.com";
const baseUrL = "http://localhost:8080";

export function fetchAccessToken(usr, pwd)
{
    let init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                                 client_id: usr,
                                 client_secret: pwd
                             }),
        credentials: 'include',
    };

    return fetch(baseUrL + "/authenticate", init)
            .then(response =>
                  {
                      return response.json()
                  })
}

export function graphQuery(queryParams, token)
{
    return fetch('http://localhost:8080/graphql', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        credentials: 'include',
        body: JSON.stringify(queryParams),
    }).then(response => response.json());
}