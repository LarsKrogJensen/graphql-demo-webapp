import React from "react";
import src from "../../assets/README.md"
import Markdown from 'react-components-markdown';
import {BackTop} from "antd"
import "../markdown.css"
import QueryConsole from '../../queryConsole/QueryConsoleContainer'
import withMarkdown from "../MarkdownContainer"

class IntroContact extends React.Component {

    query1 = `{ 
  listing(id: "847") { 
    id 
    name 
  } 
}`;


    render() {

        // added feature x comment
        return (
            <div>
                <BackTop/>

                <Markdown exampleConsole={ <QueryConsole embedded={true} query={this.query1} /> }>
                {this.props.content}
                </Markdown>
            </div>
        )
    }
}

export default withMarkdown(IntroContact, src);

