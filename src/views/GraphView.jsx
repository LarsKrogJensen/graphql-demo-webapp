import React from "react";
import GraphiQL from "graphiql";
import {graphQuery} from "../data/api.js";
import "../styles/graphiql.css";
import {Alert,Icon} from "antd";
import {browserHistory} from "react-router";
import { autobind } from 'core-decorators';


export default class GraphView extends React.Component {
 
    @autobind
    async graphFetcher(queryParams)
    {
        try {
            return await graphQuery(queryParams, this.props.token.access_token);
        } catch (e) {
            console.log("Junk: " +e);
            return {
                data: e
            }
        }
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
                                <Icon type="laptop"/>
                                <div style={{display: "inline", paddingLeft: "16px"}}>Query Console</div>
                            </div>
                        </GraphiQL.Logo>
                    </GraphiQL>
                </div>
        );
    }

    render()
    {
        if (this.props.token != null) {
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

GraphView.propTypes = {
    // appModel: React.PropTypes.instanceOf(AppModel).isRequired
};