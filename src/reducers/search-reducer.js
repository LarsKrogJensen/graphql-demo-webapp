import * as types from "actions/action-types";

const initialState = {
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
                ...action
            });

        case types.SEARCH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                ...action
            });

        case types.SEARCH_FAILED:
            return Object.assign({}, state, {
                result: [],
                loading: false
            });

        default:
            return state;

    }
};

export default searchReducer;
