import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchView from "./SearchView"
import LoginView from "./LoginView"
import GraphView from "./GraphView"
import NotFoundView from "./NotFoundView"
import AppFrame from "./AppFrame"

export default class App extends React.Component {

    render()
    {
        return (
                <Router history={browserHistory}>
                    <Route path="/" component={AppFrame}>
                        <IndexRedirect to="/auth"/>
                        <Route path="/auth" component={LoginView }/>
                        <Route path="/search" component={SearchView}/>
                        <Route path="/graphiql" component={GraphView}/>
                        <Route path="*" component={NotFoundView}/>
                    </Route>
                </Router>
        )
    }
}
