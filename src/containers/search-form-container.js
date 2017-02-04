import React from "react";

import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "views/search-form"
import {autobind, debounce} from "core-decorators";
import store from "store"
import * as searchActions from "actions/search-actions"

class SearchContainer extends React.Component {

    @autobind
    @debounce
    search(searchQuery) {
        console.log("* " + searchQuery);
        store.dispatch(searchActions.searchInit(searchQuery));

        let query = JSON.stringify({
            query: `{ 
                      listingSearch(searchQuery: "${searchQuery}") 
                      { 
                           id 
                           name 
                           longName
                         }
                       } 
                    }`
        });

        queryApi.search(this.props.token, query)
    }

    render() {
        return (
            <SearchForm result={this.props.result}
                        token={this.props.token}
                        searchQuery={this.props.searchQuery}
                        loading={this.props.loading}
                        search={this.search}/>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        token: store.authState.token.access_token,
        result: store.searchState.result,
        searchQuery: store.searchState.searchQuery,
        loading: store.searchState.loading
    };
};

export default connect(mapStateToProps)(SearchContainer) ;