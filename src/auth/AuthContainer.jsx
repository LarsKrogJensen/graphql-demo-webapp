import React from "react";

import * as authApi from "api/auth-api";
import {connect} from "react-redux";
import AuthForm from "./AuthForm"
import {autobind} from "core-decorators";
import store from "app/app-store"
import * as actions from "./actions"

class AuthContainer extends React.Component {
    @autobind
    async authenticate(username, password, remember) {
        store.dispatch(actions.authInit(username, password, remember));

        try {
            let json = await authApi.authenticate(username, password);
            store.dispatch(actions.authSuccess(json));
           } catch (e) {
               store.dispatch(actions.authFailed({
                   error: "Authentication failed",
                   error_description: e.message
               }));
           }
    }

    render() {
        return (
            <AuthForm username={this.props.username}
                      password={this.props.password}
                      remember={this.props.remember}
                      token={this.props.token}
                      loading={this.props.loading}
                      authenticate={this.authenticate}/>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        ...store.authState
    };
};

export default connect(mapStateToProps)(AuthContainer) ;