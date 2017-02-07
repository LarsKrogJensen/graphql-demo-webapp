import * as types from "./action-types";

type State = {
    searchQuery: string;
    searchResult: Array<Object>;
    error: string;
    error_description: string;
    loading: boolean;

}
const initialState: State = {
    searchQuery: "",
    searchResult: [],
    error: null,
    error_description: null,
    loading: false
};

export default function (state: State = initialState, action) {
    switch (action.type) {

        case types.SEARCH_INIT:
            return Object.assign({}, state, {
                loading: true,
                error_description: null,
                ...action
            });

        case types.SEARCH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                ...action
            });

        case types.SEARCH_FAILED:
            return Object.assign({}, state, {
                searchResult: [],
                loading: false,
                ...action
            });

        default:
            return state;

    }
};

