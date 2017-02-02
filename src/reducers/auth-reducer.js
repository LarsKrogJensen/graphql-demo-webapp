import * as types from "../actions/action-types";

const initialState = {
    token: null,
    username: "",
    password: "",
    remember: true,
    loading: false
};

const authReducer = function (state = initialState, action)
{
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
            return Object.assign({}, state, {token: null});

        default:
            return state;

    }
};

export default authReducer;
