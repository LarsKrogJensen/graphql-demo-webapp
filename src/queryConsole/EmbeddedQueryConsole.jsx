import React, {PropTypes} from "react";
import GraphiQL from "./CustomGraphiQL";
import "codemirror/theme/mdn-like.css"


export default class EmbeddedQueryConsole extends React.Component {
    componentDidMount() {
        console.log("did")
    }

    render() {
        let style = {
            height: '200px',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
            borderTop: '1px solid #e0e0e0',
            borderRight: '1px solid #e0e0e0',
            borderBottom: '1px solid #e0e0e0'
        };

        return (
            <div style={style}>
                <GraphiQL fetcher={this.props.fetcher}
                          embedded
                          editorTheme="mdn-like">
                </GraphiQL>
            </div>
        );
    }
}

EmbeddedQueryConsole.propTypes = {
    token: PropTypes.string,
    embedded: PropTypes.bool,
    fetcher: PropTypes.func.isRequired
};