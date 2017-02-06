//@flow
import * as types from "./action-types.js";

export function authInit(username : string, password : string, remember : boolean) {
    return {
        type: types.AUTH_INIT,
        username: username,
        password: password,
        remember: remember
    };
}

export function authSuccess(token: string) {
    return {
        type: types.AUTH_SUCCESS,
        token: token
    };
}

export function authFailed(error : string, error_description : string) {
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