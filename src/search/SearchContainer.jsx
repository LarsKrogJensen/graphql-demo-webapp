import React from "react";

import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import SearchForm from "./SearchForm"
// import {autobind} from "core-decorators";
import store from "../app/app-store"
import * as actions from "./actions"
import * as constants from "./constants"
import auth from "auth"

class SearchContainer extends React.Component {

    //@autobind
    //@debounce
    async onSearch(searchQuery) {
        console.log("* " + searchQuery);
        store.dispatch(actions.searchInit(searchQuery));

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
            store.dispatch(actions.searchSuccess(json.data.listingSearch))
        } catch (e) {
            store.dispatch(actions.searchFailed(
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
                        search={this.props.onSearch2}/>
        );
    }
}

SearchContainer.propTypes = {
    // no explicit props accepted, though redux injects some from search state
};

const mapStateToProps = (store) => {
    return {
        token: store[auth.constants.NAME].token.access_token, // todo: not allow to lookup 'auth' by name
        ...store[constants.NAME],
    };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch2: (searchQuery) => {
        console.log("onSearch2: " + searchQuery)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer) ;