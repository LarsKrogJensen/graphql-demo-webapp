import React from "react";
import PropTypes from 'prop-types/prop-types';
import GraphiQL from "graphiql"
import {Icon} from "antd"
// import "codemirror/theme/mdn-like.css"
import "./graphiql.css"


export default class QueryConsole extends React.Component {

    render() {
        let style = {
            height: 'calc(100vh - 64px)',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
        };

        return (
            <div style={style}>
                <GraphiQL fetcher={this.props.fetcher}>
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
}

QueryConsole.propTypes = {
    token: PropTypes.string,
    embedded: PropTypes.bool,
    fetcher: PropTypes.func.isRequired
};