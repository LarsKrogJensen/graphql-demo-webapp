import * as types from "./action-types";


export const searchSuccess = (result) => (
    {
        type: types.SEARCH_SUCCESS,
        result
    }
);


export const searchInit = (searchQuery) => (
    {
        type: types.SEARCH_INIT,
        searchQuery
    }
);


export const searchFailed = (error, error_description) => (
    {
        type: types.SEARCH_FAILED,
        error,
        error_description
    }
);

