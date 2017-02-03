import * as types from "actions/action-types";

const initialState = {
    accessToken: null,
};

const graphiqlReducer = function (state = initialState, action) {
    switch (action.type) {
        
        case types.AUTH_SUCCESS:
            return Object.assign({}, state, {
                token: action.token.access_token
            });
        case types.AUTH_FAILED:
            return Object.assign({}, state, {
                token: null
            });
        case types.AUTH_EXPIRED:
            return Object.assign({}, state, {
                token: null
            });

        default:
            return state;

    }
};

export default graphiqlReducer;
