import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchContainer from "search/SearchContainer";
import AuthContainer from "containers/auth-form-container";
import GraphiqlContainer from "containers/graphiql-container";
import NotFoundView from "views/NotFoundView";
import AppFrame from "AppFrame";

export default  (
        <Router history={browserHistory}>
            <Route path="/" component={AppFrame}>
                <IndexRedirect to="/auth"/>
                <Route path="/auth" component={AuthContainer}/>
                <Route path="/search" component={SearchContainer}/>
                <Route path="/graphiql" component={GraphiqlContainer}/>
                <Route path="*" component={NotFoundView}/>
            </Route>
        </Router>
)
