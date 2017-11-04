import React, {createElement} from "react"
import marksy from 'marksy/components'
import SuperComponent from "./components/super";
import {print, parse} from "graphql"
import "../antd2.css"

// import "../docs/markdown.css"
import QueryConsole from "../queryConsole/QueryConsoleContainer";

export default class MarksyView extends React.Component {

    render() {
        const compile = marksy({
            createElement,
            components: {
                SuperComponent(props) {
                    return <SuperComponent>{props.children}</SuperComponent>
                },
                Explorer(props) {
                    return (
                        <div style={{paddingTop:16, paddingBottom: 16}}>
                            <QueryConsole embedded={true} query={print(parse(props.source))} />
                        </div>
                    )
                }
            }
        });

        let md = compile(this.props.content);
        return <div className="markdown">{md.tree}</div>
    }
}