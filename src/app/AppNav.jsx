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
                      style={{lineHeight: '63px', float: "right"}}>
                    <Menu.Item key="/auth">
                        <Icon type="user"/>
                        <span className="nav-text">Login</span>
                    </Menu.Item>
                    <Menu.Item key="/search">
                        <Icon type="search"/>
                        <span className="nav-text">Search</span>
                    </Menu.Item>
                    <Menu.Item key="/graphiql">
                        <Icon type="laptop"/>
                        <span className="nav-text">Console</span>
                    </Menu.Item>
                </Menu>
        )
    }
}


