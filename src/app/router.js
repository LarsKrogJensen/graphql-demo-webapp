import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchContainer from "search/SearchContainer";
import QueryConsoleContainer from "queryConsole/QueryConsoleContainer";
import NotFoundView from "views/NotFoundView";
import AppFrame from "./AppFrame";
import DocsContainer from "../docs/DocsContainer";

export default  (
        <Router history={browserHistory}>
            <Route path="/" component={AppFrame}>
                <IndexRedirect to="/docs"/>
                <Route path="/docs" component={DocsContainer}/>
                <Route path="/search" component={SearchContainer}/>
                <Route path="/console" component={QueryConsoleContainer}/>
                <Route path="*" component={NotFoundView}/>
            </Route>
        </Router>
)
