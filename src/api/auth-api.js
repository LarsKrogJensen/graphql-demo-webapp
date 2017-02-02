import baseUrl from "./base-url";
import store from "../store";
import * as authActions from "../actions/auth-actions";

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

    try {
        let response = await fetch(baseUrl + "/authenticate", init);
        if (response.status === 200) {
            let json = await response.json();
            store.dispatch(authActions.authSuccess(json))
        } else {
            store.dispatch(authActions.authFailed({
                error: "Authentication failed",
                error_description: response.statusText
            }));
        }
    } catch (e) {
        store.dispatch(authActions.authFailed({
            error: "Authentication failed",
            error_description: e.message
        }));
    }
}