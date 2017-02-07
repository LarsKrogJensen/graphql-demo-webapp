import React from "react";
// import ReactMarkdown from "react-markdown"
// import MDReactComponent from 'markdown-react-js';
import MarkdownRenderer from 'react-markdown-renderer';
import readmed from "../assets/README.md"
// import {autobind} from "core-decorators";

//var mardownFile = require('raw!../assets/README.md');

export default class DocsContainer extends React.Component {
    constructor() {
        super();
        this.state = {content: "Loading..."};
    }

    async loadMarkdown (url) {
        let resp = await fetch(url);
        let text = await resp.text();

        this.setState ({content: text});
    };

    componentDidMount() {
        this.loadMarkdown(readmed, "GET", this.update)
    }

    render() {

        return (

            <div style={{padding:16}}>
                {/*<ReactMarkdown source={this.state.content} />*/}

                <MarkdownRenderer markdown={this.state.content}/>
            </div>
        )
    }
}