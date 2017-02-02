import React from "react";

import * as authApi from "../api/auth-api";
import {connect} from "react-redux";
import AuthForm from "../views/auth-form"
import {autobind} from "core-decorators";

class AuthContainer extends React.Component {


    // authenticate()
    // {
    //     this.props.appModel.token = null;
    //     try {
    //         authenticate(this.state.username, this.state.password)
    //                 .then(token =>
    //                       {
    //                           this.props.appModel.token = token;
    //                           this.setState({loading: false});
    //                           if (this.queryParams.goto != null)
    //                               browserHistory.push(this.queryParams.goto)
    //                       })
    //                 .catch(reason => console.log(reason));
    //     } catch (e) {
    //         this.props.appModel.token = {
    //             error: "Authentication failed",
    //             error_description: e.message
    //         };
    //         this.setState({loading: false});
    //     }
    // }

    @autobind
    authenticate(username, password)
    {
         authApi.authenticate(username, password)
    }

    render()
    {
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


const mapStateToProps = (store) =>
{
    return {
        token: store.authState.token,
        username: store.authState.username,
        password: store.authState.password,
        remember: store.authState.remember,
        loading: store.authState.loading
    };
};

export default connect(mapStateToProps)(AuthContainer) ;