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
            return Object.assign({}, state, {
                loading: true,
                ...action
            });

        case types.AUTH_SUCCESS:
            return Object.assign({}, state, {
                token: action.token,
                loading: false
            });

        case types.AUTH_FAILED:
            return Object.assign({}, state, {
                token: action.token,
                loading: false
            });

        case types.AUTH_EXPIRED:
        case types.AUTH_SIGNOUT:
            return Object.assign({}, state, {token: {}});

        default:
            return state;

    }
};
