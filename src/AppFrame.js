import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Layout} from "antd";
import "./AppFrame.css"
import logo from "./assets/logo.svg";
import AppNav from "./AppNav";
const {Header, Content} = Layout;

export default class AppFrame extends React.Component {
    render()
    {
        let pathname = this.props.location.pathname;
        console.log("Current location: " + pathname);

        return <div className="App">
            <Layout className="layout" style={{height: "100%"}}>
                <Header style={{paddingLeft: 16, paddingRight: 32}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <AppNav path={pathname}/>
                    
                </Header>
                <Layout>
                    <Content style={{height: "100%"}}>
                        <ReactCSSTransitionGroup
                                component="div"
                                transitionLeave={false}
                                transitionName="example"
                                transitionEnterTimeout={300}>
                            <div key={location.pathname}>
                                {this.props.children}
                            </div>
                        </ReactCSSTransitionGroup>
                        
                    </Content>
                </Layout>
            </Layout>
        </div>
    }

    //avoid inserting a container
    firstChild(props) {
      const childrenArray = React.Children.toArray(props.children);
      return childrenArray[0] || null;
    }
}

