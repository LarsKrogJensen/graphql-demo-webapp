import * as types from "actions/action-types";

const initialState = {
    accessToken: null,
    searchQuery: "",
    searchResult: [],
    errorMessage: null,
    loading: false
};

const searchReducer = function (state = initialState, action) {
    switch (action.type) {

        case types.SEARCH_INIT:
            return Object.assign({}, state, {
                loading: true,
                errorMessage: null,
                searchQuery: action.searchQuery,
            });

        case types.SEARCH_SUCCESS:
            return Object.assign({}, state, {
                result: action.result,
                loading: false
            });

        case types.SEARCH_FAILED:
            return Object.assign({}, state, {
                result: [],
                loading: false
            });

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

export default searchReducer;
