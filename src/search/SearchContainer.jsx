import React from "react";

import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "./SearchForm"
import {autobind, debounce} from "core-decorators";
import store from "store"
import search from "search"

class SearchContainer extends React.Component {

    @autobind
    @debounce
    async onSearch(searchQuery) {
        console.log("* " + searchQuery);
        store.dispatch(search.actions.searchInit(searchQuery));

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

        try {
            let json = await queryApi.graphQuery(this.props.token, query);
            store.dispatch(search.actions.searchSuccess(json.data.listingSearch))
        } catch (e) {
            store.dispatch(search.actions.searchFailed(
                {
                    error: "Search Failed",
                    error_description: e.message
                }
            ))
        }
    }

    render() {
        return (
            <SearchForm result={this.props.result}
                        token={this.props.token}
                        searchQuery={this.props.searchQuery}
                        loading={this.props.loading}
                        search={this.onSearch}/>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        token: store.authState.token.access_token,
        ...store[search.constants.NAME],
    };
};

export default connect(mapStateToProps)(SearchContainer) ;