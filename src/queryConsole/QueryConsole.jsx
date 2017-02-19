import React, {PropTypes} from "react";
import GraphiQL from "graphiql";
import {graphQuery} from "api/query-api";
import "./graphiql.css";
import {Modal, Icon} from "antd";
import {autobind} from 'core-decorators';
import AuthContainer from "auth/AuthContainer"


export default class QueryConsole extends React.Component {

    @autobind
    async graphFetcher(queryParams) {
        try {
            return await graphQuery(this.props.token, JSON.stringify(queryParams));
        } catch (e) {
            console.log("Junk: " + e);
            return {
                data: e
            }
        }
    }

    renderGraphiQL() {
        let embedded = this.props.embedded || false;
        
        let style = {
            height: embedded ? '200px' : 'calc(100vh - 64px)',
            margin: 0,
            width: '100%',
            overflow: 'hidden'
        };
        
        return (
            <div style={style}>
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

    render() {
        if (this.props.token != null) {
            return this.renderGraphiQL()
        }

        return (
            <div style={{padding: 24}}>
                <Modal title="Please sign in" visible={true} closable={false}
                       footer={[]}>
                    <AuthContainer/>
                </Modal>
            </div>
        )
    }
}

QueryConsole.propTypes = {
    token: PropTypes.string,
    embedded: PropTypes.bool
    // appModel: React.PropTypes.instanceOf(AppModel).isRequired
};