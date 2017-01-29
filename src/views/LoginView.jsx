import React from "react";
import {Alert, Form, Icon, Input, Button, Checkbox} from "antd";
import {browserHistory} from "react-router";
import "./LoginView.css";
import {fetchAccessToken} from "../data/api";
import {parse} from "qs"
import {AppModel} from "../model/AppModel";
const FormItem = Form.Item;


class LoginView extends React.Component {

    queryParams = {

    };

    constructor()
    {
        super();
        this.state = {
            username: "",
            password: "",
            remember: true,
            loading: false
        };

        let params = location.search;
        if (params != null) {
            params = params.substr(params.indexOf("?") + 1)
            this.queryParams = parse(params)
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        this.props.form.validateFields((err, values) =>
                                       {
                                           if (!err) {
                                               console.log('Received values of form: ', values);

                                               this.setState({
                                                                 loading: true,
                                                                 ...values
                                                             }, () =>
                                                             {
                                                                 this.authenticate()
                                                             })
                                           }
                                       });
    }

    authenticate()
    {
        this.props.appModel.token = null;
        try {
            fetchAccessToken(this.state.username, this.state.password)
                    .then(token =>
                          {
                              this.props.appModel.token = token;
                              this.setState({loading: false});
                              if (this.queryParams.goto != null)
                                  browserHistory.push(this.queryParams.goto)
                          })
                    .catch(reason => console.log(reason));
        } catch (e) {
            this.props.appModel.token = {
                error: "Authentication failed",
                error_description: e.message
            };
            this.setState({loading: false});
        }
    }

    renderForm()
    {
        const {getFieldDecorator} = this.props.form;

        let alert = null;

        let token = this.props.appModel.token;
        if (token != null && token.error != null) {
            alert = (
                    <Alert
                            message="Login failed"
                            description={token.error}
                            type="error"
                            showIcon/>)
        }

        return (
                <Form onSubmit={this.handleSubmit} className="login-form">
                    {alert}
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                            initialValue: this.state.username
                        })(
                                <Input addonBefore={<Icon type="user"/>}
                                       placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                            initialValue: this.state.password
                        })(
                                <Input addonBefore={<Icon type="lock"/>}
                                       type="password"
                                       placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: this.state.remember,
                        })(
                                <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">Forgot password</a>
                        <Button type="primary"
                                htmlType="submit"
                                loading={this.state.loading}
                                className="login-form-button">
                            Log in
                        </Button>
                        Or <a>register now!</a>
                    </FormItem>
                </Form>
        )
    }

    render()
    {
        let token = this.props.appModel.token;

        let content;
        if (token != null && token.access_token != null) {
            content = ( <Alert message="Authenticated"
                               description="You are already successfully authenticated"
                               type="success"
                               showIcon/> )
        } else {
            content = this.renderForm();
        }

        return <div style={{padding: 24}}> {content}</div>
    }
}
export default LoginView = Form.create()(LoginView);

LoginView.propTypes = {
    appModel: React.PropTypes.instanceOf(AppModel).isRequired
};