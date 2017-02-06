import * as authApi from "api/auth-api";
import {connect} from "react-redux";
import AuthForm from "./AuthForm"
import * as actions from "./actions"
import constants from "./constants"

// thunk that dispatches the auth request
const authenticateThunk = (username, password, remember) => {
    return (dispatch) => {
        // thunk called
        dispatch(actions.authInit(username, password, remember));

        authApi.authenticate(username, password)
            .then(json => dispatch(actions.authSuccess(json)))
            .catch(err => dispatch(actions.authFailed("Signin failed", err.message)))
    }
};

const mapStateToProps = (store) => {
    return {
        ...store[constants.NAME]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (username, password, remember) => dispatch(authenticateThunk(username, password, remember))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
