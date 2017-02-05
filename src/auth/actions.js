import * as types from "./action-types.js";

export function authInit(username, password, remember) {
    return {
        type: types.AUTH_INIT,
        username: username,
        password: password,
        remember: remember
    };
}

export function authSuccess(token) {
    return {
        type: types.AUTH_SUCCESS,
        token: token
    };
}

export function authFailed(error, error_description) {
    return {
        type: types.AUTH_FAILED,
        token: {
            error,
            error_description
        }
    };
}

export function authExpired() {
    return {
        type: types.AUTH_EXPIRED,
    };
}
export function authSignOut() {
    return {
        type: types.AUTH_SIGNOUT,
    };
}