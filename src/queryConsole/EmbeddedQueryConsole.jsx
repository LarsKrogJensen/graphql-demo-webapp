import React, {PropTypes} from "react";
import GraphiQL from "graphiql";
import "./graphiql.css"
import "./embedded.css"

// import "codemirror/theme/mdn-like.css"


export default class EmbeddedQueryConsole extends React.Component {
    componentDidMount() {
        console.log("did")
    }

    render() {

        return (
            <div className="reset-this">
                <div className="embedded bordered graphiql">
                    <GraphiQL fetcher={this.props.fetcher}
                              embedded
                              query={this.props.query}>
                    </GraphiQL>
                </div>
            </div>
        );
    }
}

EmbeddedQueryConsole.propTypes = {
    token: PropTypes.string,
    query: PropTypes.string,
    embedded: PropTypes.bool,
    fetcher: PropTypes.func.isRequired
};