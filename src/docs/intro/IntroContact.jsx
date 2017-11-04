import React from "react";
import SuperComponent from "../components/super"
import Markdown from "react-markdown-it"
import QueryConsole from 'queryConsole/QueryConsoleContainer'


class MdDoc extends React.Component {

    render() {
        return (
            <div className="ant-alert">
                <Markdown source="**Markdown is awesome!**"/>

                {/* Or pass it as children */}
                {/* You can nest React components, too */}
                <Markdown>
                    {`
                					## Header
                
                					1. One
                					2. Two
                					`}

                    <SuperComponent>Nested component</SuperComponent>

                    <QueryConsole embedded={true} query={this.query} />

                    {`Test`}
                </Markdown>
            </div>
        )
    }
}

export default MdDoc


