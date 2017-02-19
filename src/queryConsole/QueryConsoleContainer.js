import React from "react";

// import * as queryApi from "api/query-api";
import {connect} from "react-redux";
import QueryConsoleView from "./QueryConsole"
import auth from "auth"

class QueryConsoleContainer extends React.Component {

    render() {
        return (
            <QueryConsoleView {...this.props}/>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        token: store[auth.constants.NAME].token.access_token
    };
};

export default connect(mapStateToProps)(QueryConsoleContainer) ;