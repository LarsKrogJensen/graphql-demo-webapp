import React from "react";
import readme from "../../assets/README.md"
import ReactMarkdown from "react-markdown"
import {BackTop} from "antd"

export default class IntroContact extends React.Component {

    constructor() {
        super();
        this.state = {content: "Loading..."};
    }
    

    // handleIterate = function (Tag, props, children) {
    //     switch (Tag) {
    //         case 'table':
    //             props.className = 'ant-table ant-table-small';
    //             break;
    //         case 'tr':
    //             props.className = 'ant-table-row';
    //             break;
    //         case 'hr':
    //         case 'img':
    //             return <Tag {...props}/>;
    //
    //         // case 'code':
    //         //     if (props['data-language']) {
    //         //         return <Tag {...props}
    //         //             dangerouslySetInnerHTML={{__html: window.hljs.highlight(props['data-language'], children[0]).value}}/>
    //         //     }
    //         //     break;
    //         default:
    //             break;
    //     }
    //     return <Tag {...props}>{children}</Tag>;
    // };


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
            <div style={{padding:16}}>
                <BackTop/>
                {/*<Markdown>*/}
                {/**/}
                {/*</Markdown>*/}
                {/*<MDReactComponent text={this.state.content}*/}
                {/*onIterate={this.handleIterate}*/}
                {/*markdownOptions={{ typographer: true }}/>*/}
                {/*<MarkdownRenderer markdown={this.state.content}/>*/}
                <ReactMarkdown source={this.state.content}/>
            </div>
        )
    }
}

