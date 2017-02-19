import React from "react";
import readme from "../../assets/README.md"
import Markdown from 'react-components-markdown';
import {BackTop} from "antd"
import "../markdown.css"
import SuperComponent from '../components/super';
import QueryConsole from '../../queryConsole/QueryConsoleContainer'

export default class IntroContact extends React.Component {

    constructor() {
        super();
        this.state = {content: "Loading..."};
    }

    async loadMarkdown(url) {
        let resp = await fetch(url);
        let text = await resp.text();

        this.setState({content: text});
    };

    componentDidMount() {
        this.loadMarkdown(readme).catch(err => {
            console.log(err)
        })
    }

    render() {

        return (
            <div>
                <BackTop/>

                <Markdown exampleMain={
                        <SuperComponent>
                          HELLO AFRICA
                        </SuperComponent>
                      }
                          exampleSecondary={
                        <SuperComponent />
                      }
                exampleConsole={
                    <QueryConsole embedded={true}/>
                }>
                    {this.state.content}
                </Markdown>
            </div>
        )
    }
}

