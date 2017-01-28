import React from "react";
import {Menu, Icon} from "antd";
import {browserHistory} from "react-router";

export default class AppNav extends React.Component {
    onMenuSelected(param)
    {
        console.log(param.key);
        browserHistory.push(param.key)
    }

    render()
    {

        return (
                <Menu theme="dark"
                      mode="horizontal"
                      onSelect={this.onMenuSelected}
                      selectedKeys={[this.props.path]}
                      style={{lineHeight: '64px', float: "right"}}>
                    <Menu.Item key="/auth">
                        <Icon type="user"/>
                        <span className="nav-text">Login</span>
                    </Menu.Item>
                    <Menu.Item key="/search">Search</Menu.Item>
                    <Menu.Item key="/graphiql">GraphQL</Menu.Item>
                </Menu>
        )
    }
}


