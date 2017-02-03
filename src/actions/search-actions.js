import * as types from "actions/action-types";

export function searchInit(searchQuery) {
    return {
        type: types.SEARCH_INIT,
        searchQuery

    };
}
export function searchSuccess(result) {
    return {
        type: types.SEARCH_SUCCESS,
        result: result
    };
}

export function searchFailed(error, error_description) {
    return {
        type: types.SEARCH_FAILED,
        error: error,
        error_description
    };
}

