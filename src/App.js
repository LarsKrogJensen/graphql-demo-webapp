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


    constructor()
    {
        super();
        this.createSearchView = this.createSearchView.bind(this);
        this.createAuthView = this.createAuthView.bind(this);
        this.createGraphiQLView = this.createGraphiQLView.bind(this);
    }

    createSearchView()
    {
        return <SearchView appModel={this.appModel}/>
    }

    createAuthView()
    {
        return <LoginView appModel={this.appModel}/>
    }

    createGraphiQLView()
    {
        return <GraphView appModel={this.appModel}/>
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
