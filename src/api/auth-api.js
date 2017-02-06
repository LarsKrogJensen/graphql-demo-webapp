import baseUrl from "api/base-url";


export async function authenticate(username, password) {
    let init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: username,
            client_secret: password
        }),
        credentials: 'include',
    };


    let response = await fetch(baseUrl + "/authenticate", init);
    return response.json();


}