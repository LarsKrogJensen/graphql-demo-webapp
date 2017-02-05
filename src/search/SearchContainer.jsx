import React from "react";

import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "./SearchForm"
// import {autobind} from "core-decorators";
import store from "../app/app-store"
import * as actions from "./actions"
import searchConstants from "./constants"
import auth from "auth"
import {autobind} from "core-decorators";

class SearchContainer extends React.Component {

    @autobind
    async onSearch(searchQuery) {
        console.log("* " + searchQuery);
        store.dispatch(actions.searchInit(searchQuery));


    }

    render() {
        return (
            <SearchForm {...this.props}/>
        );
    }
}

SearchContainer.propTypes = {
    // no explicit props accepted, though redux injects some from search state
};

const mapStateToProps = (store) => {
    return {
        token: store[auth.constants.NAME].token.access_token || "", // todo: not allow to lookup 'auth' by name
        ...store[searchConstants.NAME],
        // searchResult: store[searchConstants.NAME].searchResult,
        // searchQuery: store[searchConstants.NAME].searchQuery,
        // loading: store[searchConstants.NAME].loading
        //search: doSearch
    };
};


const searchThunk = (searchQuery) => {
    return (dispatch, getState) => {
        // thunk called
        dispatch(actions.searchInit(searchQuery));
        // we need to pull the access token 
        let state = getState()[auth.constants.NAME];
        let token = state.token.access_token;
        actions.performSearch(token, searchQuery, queryApi.graphQuery)
            .then(json => dispatch(actions.searchSuccess(json.data.listingSearch)))
            .catch(err => dispatch(actions.searchFailed("Failed", err.message)))
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: (searhQuery) => dispatch(searchThunk(searhQuery))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer) ;