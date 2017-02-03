import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchContainer from "containers/search-form-container";
import AuthContainer from "containers/auth-form-container";
import GraphView from "views/GraphView";
import NotFoundView from "views/NotFoundView";
import AppFrame from "AppFrame";

export default  (
        <Router history={browserHistory}>
            <Route path="/" component={AppFrame}>
                <IndexRedirect to="/auth"/>
                <Route path="/auth" component={AuthContainer}/>
                <Route path="/search" component={SearchContainer}/>
                <Route path="/graphiql" component={GraphView}/>
                <Route path="*" component={NotFoundView}/>
            </Route>
        </Router>
)
