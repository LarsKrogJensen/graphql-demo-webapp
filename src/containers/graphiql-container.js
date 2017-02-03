import React from "react";

// import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import GraphView from "views/graph-view"
// import {autobind, debounce} from "core-decorators";
// import store from "store"
// import * as searchActions from "../actions/search-actions"

class GraphiqlContainer extends React.Component {

    // @autobind
    // @debounce
    // search(searchQuery) {
    //     console.log("* " + searchQuery);
    //     store.dispatch(searchActions.searchInit(searchQuery));
    //
    //     let query = JSON.stringify({
    //         query: "{ listingSearch(searchQuery: \"" + searchQuery + "\") {id name longName}} }"
    //     });
    //
    //     queryApi.graphQuery(this.props.token, query)
    // }

    render() {
        return (
            <GraphView token={this.props.token}/>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        token: store.graphiqlState.token
    };
};

export default connect(mapStateToProps)(GraphiqlContainer) ;