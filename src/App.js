import React from "react";
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import SearchView from "./views/SearchView";
import LoginView from "./views/LoginView";
import GraphView from "./views/GraphView";
import NotFoundView from "./views/NotFoundView";
import AppFrame from "./AppFrame";
import {AppModel} from "./model/AppModel";

export default class App extends React.Component {
    appModel = new AppModel();

    createSearchView()
    {
        return <SearchView appModel={{}}/>
    }

    createAuthView()
    {
        return <LoginView appModel={{}}/>
    }

    createGraphiQLView()
    {
        return <GraphView appModel={{}}/>
    }

    render()
    {
        return (
                <Router history={browserHistory}>
                    <Route path="/" component={AppFrame}>
                        <IndexRedirect to="/auth"/>
                        <Route path="/auth" component={this.createAuthView }/>
                        <Route path="/search" component={this.createSearchView}/>
                        <Route path="/graphiql" component={this.createGraphiQLView}/>
                        <Route path="*" component={NotFoundView}/>
                    </Route>
                </Router>
        )
    }
}
