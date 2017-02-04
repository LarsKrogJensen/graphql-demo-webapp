import React from "react";
import GraphiQL from "graphiql";
import {graphQuery} from "api/query-api";
import "styles/graphiql.css";
import {Modal,Icon} from "antd";
// import {browserHistory} from "react-router";
import { autobind } from 'core-decorators';
import AuthContainer from "../containers/auth-form-container.js"


export default class GraphView extends React.Component {
 
    @autobind
    async graphFetcher(queryParams)
    {
        try {
            return await graphQuery(this.props.token, JSON.stringify(queryParams));
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
                    <Modal title="Please sign in" visible={true}  closable={false}
                           footer={[]}>
                        <AuthContainer/>
                    </Modal>
                </div>
        )
    }
}

GraphView.propTypes = {
    // appModel: React.PropTypes.instanceOf(AppModel).isRequired
};