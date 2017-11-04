import * as React from "react"
import markdownIt from 'markdown-it';
import emoji from "markdown-it-emoji"
import deflist from "markdown-it-deflist"
import abbr from "markdown-it-abbr"
import "../docs/markdown.css"
import QueryConsole from "../queryConsole/QueryConsoleContainer"

export default class Markdown2 extends React.Component {


    constructor() {
        super();
        this.split = this.split.bind(this);
        this.renderMarkdown = this.renderMarkdown.bind(this);
        this.renderExplorer = this.renderExplorer.bind(this);
    }

    render() {
        const mdSource = this.props.content;

        // split into markdown and container blocks
        // a container is where we will render react components
        let blocks = this.split(mdSource);
        return (<div>{blocks}</div>)
    }


    split(mdSource) {
        let blocks = mdSource.split(":::");

        return blocks.map(block => {
            let infoParts = block.split("\n");
            if (infoParts.length > 0 && infoParts[0].indexOf("explorer") > -1) {
                return this.renderExplorer(infoParts.slice(1).join("\n"));
            } else {
                return this.renderMarkdown(block);
            }
        });
    }

    renderMarkdown(source) {
        let html = markdownIt().use(emoji).use(abbr).use(deflist).render(source);

        return (
            <div
                className="github-markdown__markdown-body__97ba8"
                dangerouslySetInnerHTML={{__html: html}}
            />)
    }

    renderExplorer(source) {
        return (
            <div style={{paddingTop: 16, paddingBottom: 16}}>
                <QueryConsole embedded={true} query={source}/>
            </div>
        )
    }
}