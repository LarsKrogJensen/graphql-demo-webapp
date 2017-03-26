import React, {PropTypes} from "react";
//import GraphiQL from "./CustomGraphiQL";
import GraphiQL from "graphiql"
import "codemirror/theme/mdn-like.css"


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
                          editorTheme="mdn-like">
                </GraphiQL>
            </div>
        );
    }
}

// <CustomGraphiQL.Logo>
//                         <div id="logo">
//                             <Icon type="laptop"/>
//                             <div style={{display: "inline", paddingLeft: "16px"}}>Query Console</div>
//                         </div>
//                     </CustomGraphiQL.Logo>
QueryConsole.propTypes = {
    token: PropTypes.string,
    embedded: PropTypes.bool,
    fetcher: PropTypes.func.isRequired
};