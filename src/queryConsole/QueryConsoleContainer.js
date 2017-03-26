import React from "react";

import {graphQuery} from "api/query-api";
import {connect} from "react-redux";
import QueryConsoleView from "./QueryConsole"
import EmbeddedQueryConsoleView from "./EmbeddedQueryConsole"
import auth from "auth"
import {autobind} from "core-decorators";
import withAuth from "auth/AuthGuard";

class QueryConsoleContainer extends React.Component {

    @autobind
    async graphFetcher(queryParams) {
        try {
            return await graphQuery(this.props.token, JSON.stringify(queryParams));
        } catch (e) {
            if (e.message === "Unauthorized") {
                this.props.authExpired()
            }
            return {
                data: e
            }
        }
    }

    render() {
        if (this.props.embedded) {
            return <EmbeddedQueryConsoleView fetcher={this.graphFetcher} {...this.props}/>
        }
        return <QueryConsoleView fetcher={this.graphFetcher} {...this.props}/>
    }
}


const mapStateToProps = (store) => {
    return {
        token: store[auth.constants.NAME].token.access_token
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        authExpired: () => dispatch(auth.actions.authExpired())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(QueryConsoleContainer)) ;