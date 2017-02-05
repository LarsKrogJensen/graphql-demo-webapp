import React from "react";

import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "./SearchForm"
import * as actions from "./actions"
import searchConstants from "./constants"
import auth from "auth"

// Stateless functional container component that wraps the SearchForm
// react-redux and redux-thunk will dynaimcally
// prepare thr props to include everything
// required by SearchForm
const SearchContainer = (props) => <SearchForm {...props}/>;

const mapStateToProps = (store) => {
    return {
        token: store[auth.constants.NAME].token.access_token || "",
        ...store[searchConstants.NAME]
    };
};


const searchThunk = (searchQuery) => {
    return (dispatch, getState) => {
        // thunk called
        dispatch(actions.searchInit(searchQuery));
        // we need to pull the access token from auth state
        let state = getState()[auth.constants.NAME];
        let token = state.token.access_token;
        actions.performSearch(token, searchQuery, queryApi.graphQuery)
            .then(json => dispatch(actions.searchSuccess(json.data.listingSearch)))
            .catch(err => dispatch(actions.searchFailed("Failed", err.message)))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (searhQuery) => dispatch(searchThunk(searhQuery))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer) ;