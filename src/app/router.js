import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchContainer from "search/SearchContainer";
import QueryConsoleContainer from "queryConsole/QueryConsoleContainer";
import NotFoundView from "views/NotFoundView";
import AppFrame from "./AppFrame";
import docs from "../docs/routes"


export default  (
    <Router history={browserHistory}>
        <Route path="/" component={AppFrame}>
            <IndexRedirect to="/docs"/>
            {docs}
            <Route path="/search" component={SearchContainer}/>
            <Route path="/console" component={QueryConsoleContainer}/>
            <Route path="*" component={NotFoundView}/>
        </Route>
    </Router>
)
