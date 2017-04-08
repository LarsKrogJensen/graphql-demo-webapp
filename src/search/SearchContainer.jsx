// @flow
import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "./SearchForm"
import * as actions from "./actions"
import searchConstants from "./constants"
import auth from "auth"
import withAuth from "../auth/AuthGuard";


const mapStateToProps = (store: AppStore) => {
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
            .catch(err => dispatch(actions.searchFailed("Search failed", err.message)))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchQuery) => dispatch(searchThunk(searchQuery))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withAuth(SearchForm));