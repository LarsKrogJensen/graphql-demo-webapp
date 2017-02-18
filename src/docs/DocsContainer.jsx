import React from "react";

import {browserHistory} from "react-router";// import MarkdownRenderer from 'react-markdown-renderer';
// import ReactMarkdown from "react-markdown"
// import MDReactComponent from "markdown-react-js"
//import Markdown from "markdown-to-jsx"
import {Layout, Menu, Icon} from 'antd';
import {autobind} from "core-decorators";
const {SubMenu} = Menu;
const {Content, Sider} = Layout;
// import readmed from "../assets/README.md";
// import "./bootstrap.css"


export default class DocsContainer extends React.Component {

    @autobind
    onMenuSelected(param) {
        console.log(param.key);
        browserHistory.push(param.key)
        // if (param.key === "/signout") {
        //     this.props.signout()
        // } else {
        //     browserHistory.push(param.key)
        // }
    }

    render() {
        let path = this.props.location.pathname;
        let rootPath = path.substr(0, path.lastIndexOf("/"));
        console.log("root path: " + rootPath);
        return (
            <Layout style={{ padding: '24px 0'}}>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        onSelect={this.onMenuSelected}
                        selectedKeys={[path]}
                        defaultOpenKeys={[rootPath]}
                        style={{ height: '100%' }}>
                        <SubMenu key="/docs/intro" title={<span><Icon type="user" />Introduction</span>}>
                            <Menu.Item key="/docs/intro/contact">Contact</Menu.Item>
                            <Menu.Item key="/docs/intro/changelog">Change log</Menu.Item>
                        </SubMenu>
                        <SubMenu key="/docs/dev" title={<span><Icon type="laptop" />Developer guide</span>}>
                            <Menu.Item key="/docs/dev/environment">Environment</Menu.Item>
                            <Menu.Item key="/docs/dev/authentication">Authentication</Menu.Item>
                            <Menu.Item key="/docs/dev/response-format">Response format</Menu.Item>
                            <Menu.Item key="/docs/dev/errors">Errors</Menu.Item>
                            <Menu.Item key="/docs/dev/entitlements">Entitlements</Menu.Item>
                        </SubMenu>
                        <SubMenu key="/docs/domain" title={<span><Icon type="notification" />Domain</span>}>
                            <Menu.Item key="/docs/domain/overview">overview</Menu.Item>
                            <Menu.Item key="/docs/domain/eventgroup">Event group</Menu.Item>
                            <Menu.Item key="/docs/domain/event">Event</Menu.Item>
                            <Menu.Item key="/docs/domain/participant">Participant</Menu.Item>
                            <Menu.Item key="/docs/domain/betoffer">Bet offer</Menu.Item>
                            <Menu.Item key="/docs/domain/outcome">Outcome</Menu.Item>
                        </SubMenu>

                        <SubMenu key="/docs/ref" title={<span><Icon type="notification" />Reference</span>}>
                            <Menu.Item key="/docs/ref/eventgroups">Event group</Menu.Item>
                            <Menu.Item key="/docs/ref/event">Event</Menu.Item>
                            <Menu.Item key="/docs/ref/betoffer">Bet offer</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {this.props.children}
                </Content>
            </Layout>
        );
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

        // constructor() {
        //     super();
        //     this.state = {content: "Loading..."};
        // }
        //
        // async loadMarkdown(url) {
        //     let resp = await fetch(url);
        //     let text = await resp.text();
        //
        //     this.setState({content: text});
        // };
        //
        // componentDidMount() {
        //     this.loadMarkdown(readmed).catch(err => {
        //         console.log(err)
        //     })
        // }
        //
        // render() {
        //     return (
        //         <div style={{padding:16}}>
        //             {/*<Markdown>*/}
        //                 {/**/}
        //             {/*</Markdown>*/}
        //             {/*<MDReactComponent text={this.state.content}*/}
        //                               {/*onIterate={this.handleIterate}*/}
        //                               {/*markdownOptions={{ typographer: true }}/>*/}
        //             {/*<MarkdownRenderer markdown={this.state.content}/>*/}
        //             {/*<ReactMarkdown source={this.state.content}/>*/}
        //         </div>
        //     )
        // }
    }
}