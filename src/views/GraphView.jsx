import React from "react";
import GraphiQL from "graphiql";
import {graphQuery} from "../data/api.js";
import "../styles/graphiql.css";
import {Alert,Icon} from "antd";
import {browserHistory} from "react-router";


export default class GraphView extends React.Component {
    constructor()
    {
        super();
        this.graphFetcher = this.graphFetcher.bind(this);
    }

    graphFetcher(queryParams)
    {
        return graphQuery(queryParams, this.props.appModel.token.access_token);
    }

    renderGraphiQL()
    {
        return (
                <div style={{
                    height: 'calc(100vh - 64px)',
                    margin: 0,
                    width: '100%',
                    overflow: 'hidden'
                }}>
                    <GraphiQL fetcher={this.graphFetcher}>
                        <GraphiQL.Logo>
                            <div id="logo">
                                <Icon type="upload"/>
                                <span>Query Console</span>
                            </div>
                        </GraphiQL.Logo>
                    </GraphiQL>
                </div>
        );
    }

    render()
    {
        if (this.props.appModel.token != null) {
            return this.renderGraphiQL()
        }
        return (
                <div style={{padding: 24}}>
                    <Alert message="Not authenticated"
                           description="This page requires a valid token, please sign in and try again"
                           type="error"
                           showIcon
                           closable
                           closeText="LOG IN"
                           onClose={() =>
                           {
                               browserHistory.push({pathname: "/auth", query: {goto: "/graphiql"}})
                           }}
                    />
                </div>
        )
    }
}