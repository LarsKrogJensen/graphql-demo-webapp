import * as types from "./action-types.js";

const initialState = {
    token: {},
    username: "",
    password: "",
    remember: true,
    loading: false
};

export default  function (state = initialState, action) {
    switch (action.type) {

        case types.AUTH_INIT:
            return {
                ...state,
                loading: true,
                ...action
            };

        case types.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false
            };

        case types.AUTH_FAILED:
            return {
                ...state,
                token: action.token,
                loading: false
            };

        case types.AUTH_EXPIRED:
        case types.AUTH_SIGNOUT:
            return {
                ...state,
                token: {}
            };

        default:
            return state;

    }
};
