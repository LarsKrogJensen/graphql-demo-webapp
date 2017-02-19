import React, {PropTypes} from "react";
import GraphiQL from "./CustomGraphiQL";
// import {Icon} from "antd";
import "codemirror/theme/mdn-like.css"


export default class QueryConsole extends React.Component {

    render() {
        // if (this.props.token != null) {
        //     return this.renderGraphiQL()
        // }
        //
        // return (
        //     <div style={{padding: 24}}>
        //         <Modal title="Please sign in" visible={true} closable={false}
        //                footer={[]}>
        //             <AuthContainer/>
        //         </Modal>
        //     </div>
        // )

        let style = {
            height: 'calc(100vh - 64px)',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
        };

        return (
            <div style={style}>
                <GraphiQL fetcher={this.props.fetcher}
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