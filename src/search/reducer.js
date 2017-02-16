// @flow
import * as types from "./action-types";

import type  {SearchSuccessAction} from "./action-types"

type State = {
    searchQuery: string;
    searchResult: Array<SearchItem>;
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

export default function (state: State = initialState, action: SearchSuccessAction) {
    switch (action.type) {
        case types.SEARCH_INIT:
            return {
                ...state,
                loading: true,
                error_description: null,
                ...action
            };

        case types.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action
            };

        case types.SEARCH_FAILED:
            return {
                ...state,
                searchResult: [],
                loading: false,
                ...action
            };

        default:
            return state;

    }
};

