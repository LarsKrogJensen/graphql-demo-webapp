import React from "react";
import {connect} from "react-redux";
import {Menu, Icon, Badge} from "antd";
import {hashHistory} from "react-router";
const SubMenu = Menu.SubMenu;
import auth from "auth"
import {autobind} from "core-decorators";

class AppNav extends React.Component {

    @autobind
    onMenuSelected(param) {
        console.log(param.key);

        if (param.key === "/signout") {
           this.props.signout()
        } else {
            hashHistory.push(param.key)
        }
    }

    render() {
        let subMenuTitle = <Badge count={1} style={{ backgroundColor: '#87d068' }} ><Icon type="user"/> </Badge>

        return (
            <Menu theme="dark"
                  mode="horizontal"
                  onSelect={this.onMenuSelected}
                  selectedKeys={[this.props.path]}
                  style={{lineHeight: '63px', float: "right"}}>
                <Menu.Item key="/docs/intro">
                    <Icon type="user"/>
                    <span className="nav-text">Docs</span>
                </Menu.Item>
                <Menu.Item key="/search">
                    <Icon type="search"/>
                    <span className="nav-text">Search</span>
                </Menu.Item>
                <Menu.Item key="/console">
                    <Icon type="laptop"/>
                    <span className="nav-text">Console</span>
                </Menu.Item>
                <SubMenu title={subMenuTitle}>
                    <Menu.Item key="/signout">Sign out</Menu.Item>
                </SubMenu>
            </Menu>

        )
    }
}
const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(auth.actions.authSignOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);


