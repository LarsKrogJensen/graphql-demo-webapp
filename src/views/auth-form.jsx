import React from "react";
import {Alert, Form, Icon, Input, Button, Checkbox} from "antd";
import "./auth-form.css";
import {autobind} from "core-decorators";
import store from "../store";
import {authInit} from "../actions/auth-actions";
const FormItem = Form.Item;

class AuthForm extends React.Component {

    constructor()
    {
        super();

        // let params = location.search;
        // if (params != null) {
        //     params = params.substr(params.indexOf("?") + 1)
        //     this.queryParams = parse(params)
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    @autobind
    handleSubmit(e)
    {
        e.preventDefault();
        this.props.form.validateFields((err, values) =>
                                       {
                                           if (!err) {
                                               console.log('Received values of form: ', values);
                                               store.dispatch(authInit(values.username,
                                                                       values.password,
                                                                       values.remember));

                                               this.props.authenticate(values.username,
                                                                       values.password)
                                           }
                                       });
    }

    renderForm()
    {
        const {getFieldDecorator} = this.props.form;

        let alert = null;

        let token = this.props.token;
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
                            initialValue: this.props.username
                        })(
                                <Input addonBefore={<Icon type="user"/>}
                                       placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                            initialValue: this.props.password
                        })(
                                <Input addonBefore={<Icon type="lock"/>}
                                       type="password"
                                       placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: this.props.remember,
                        })(
                                <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">Forgot password</a>
                        <Button type="primary"
                                htmlType="submit"
                                loading={this.props.loading}
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
        let token = this.props.token;

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

/// / AuthForm.propTypes = {
//     //appModel: React.PropTypes.instanceOf(AppModel).isRequired
// };
export default AuthForm = Form.create()(AuthForm);

