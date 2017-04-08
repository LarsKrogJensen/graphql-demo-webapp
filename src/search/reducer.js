// @flow
import * as types from "./action-types";

import type {SearchAction} from "./action-types"

type SearchState = {
    searchQuery: string;
    searchResult: Array<SearchItem>;
    error: ?string;
    error_description: ?string;
    loading: boolean;

}
const initialState: SearchState = {
    searchQuery: "",
    searchResult: [],
    error: null,
    error_description: null,
    loading: false
};

export default function (state: SearchState = initialState, action: SearchAction): SearchState {
    switch (action.type) {
        case types.SEARCH_INIT:
            let {searchQuery} = action;
            return {
                ...state,
                loading: true,
                error_description: null,
                error: null,
                searchQuery
            };

        case types.SEARCH_SUCCESS:
            let {searchResult} = action;
            return {
                ...state,
                loading: false,
                searchResult
            };

        case types.SEARCH_FAILED:
            let {error, error_description} = action;
            return {
                ...state,
                searchResult: [],
                loading: false,
                error,
                error_description
            };

        default:
            return state;

    }
};

