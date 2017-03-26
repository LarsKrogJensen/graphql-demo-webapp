import React from "react";

import {hashHistory} from "react-router";
import {Layout, Menu, Icon, BackTop} from 'antd';
import {autobind} from "core-decorators";
const {SubMenu} = Menu;
const {Content, Sider} = Layout;
import paths from "./paths"


export default class DocsContainer extends React.Component {

    @autobind
    onMenuSelected(param) {
        console.log(param.key);
        hashHistory.push(param.key)
    }

    render() {
        let path = this.props.location.pathname;
        let rootPath = path.substr(0, path.lastIndexOf("/"));
        return (
            <Layout style={{ padding: '24px 0'}}>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        onSelect={this.onMenuSelected}
                        selectedKeys={[path]}
                        defaultOpenKeys={[rootPath]}
                        style={{ height: '100%' }}>
                        <SubMenu key={paths.Intro.Index} title={<span><Icon type="user" />Introduction</span>}>
                            <Menu.Item key={paths.Intro.Overview}>Overview</Menu.Item>
                            <Menu.Item key={paths.Intro.Contact}>Contact</Menu.Item>
                            <Menu.Item key={paths.Intro.ChangeLog}>Change log</Menu.Item>
                        </SubMenu>
                        <SubMenu key={paths.Dev.Index} title={<span><Icon type="laptop" />Developer guide</span>}>
                            <Menu.Item key={paths.Dev.Env}>Environment</Menu.Item>
                            <Menu.Item key={paths.Dev.Auth}>Authentication</Menu.Item>
                            <Menu.Item key={paths.Dev.ResponseFormat}>Response format</Menu.Item>
                            <Menu.Item key={paths.Dev.Errors}>Errors</Menu.Item>
                            <Menu.Item key={paths.Dev.Entitlements}>Entitlements</Menu.Item>
                        </SubMenu>
                        <SubMenu key={paths.Domain.Index} title={<span><Icon type="notification" />Domain</span>}>
                            <Menu.Item key={paths.Domain.Overview}>Overview</Menu.Item>
                            <Menu.Item key={paths.Domain.EventGroup}>Event group</Menu.Item>
                            <Menu.Item key={paths.Domain.Event}>Event</Menu.Item>
                            <Menu.Item key={paths.Domain.Participant}>Participant</Menu.Item>
                            <Menu.Item key={paths.Domain.BetOffer}>Bet offer</Menu.Item>
                            <Menu.Item key={paths.Domain.Outcome}>Outcome</Menu.Item>
                        </SubMenu>
                        <SubMenu key={paths.Ref.Index} title={<span><Icon type="notification" />Reference</span>}>
                            <Menu.Item key={paths.Ref.EventGroup}>Event group</Menu.Item>
                            <Menu.Item key={paths.Ref.Event}>Event</Menu.Item>
                            <Menu.Item key={paths.Ref.Participant}>Participant</Menu.Item>
                            <Menu.Item key={paths.Ref.BetOffer}>Bet offer</Menu.Item>
                            <Menu.Item key={paths.Ref.Outcome}>Outcome</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <BackTop/>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}