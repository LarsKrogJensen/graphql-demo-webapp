import React from "react";
import {Layout} from "antd";
import "./App.css";
import logo from "./logo.svg";
import AppNav from "./AppNav";
const {Header, Content} = Layout;

export default class AppFrame extends React.Component {
    render()
    {
        return <div className="App">
                    <Layout className="layout" style={{height: "100%"}}>
                        <Header style={{paddingLeft: 16, paddingRight: 32}}>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <AppNav />
                        </Header>
                        <Content style={{height: "100%"}}>
                            {this.props.children}

                        </Content>
                    </Layout>
                </div>
    }
}

