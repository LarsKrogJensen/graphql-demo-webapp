import React from "react";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import "../styles/graphiql.css";
import {Alert} from "antd";
import {browserHistory} from "react-router";


export default class GraphView extends React.Component {
    graphQLFetcher(graphQLParams)
    {
        return fetch('http://localhost:8080/graphql', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(graphQLParams),
        }).then(response => response.json());
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
                    <GraphiQL fetcher={this.graphQLFetcher}/>
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
                               browserHistory.push({pathname: "/auth", query: {goto: "/search"}})
                           }}
                    />
                </div>
        )
    }
}