import React from "react";
import PropTypes from 'prop-types/prop-types';
import {Alert, Modal, Form, Icon, Input, Button, Checkbox} from "antd";
import "./auth-form.css";
import {autobind} from "core-decorators";
const FormItem = Form.Item;
class AuthForm extends React.Component {

    @autobind
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                this.props.authenticate(values.username, values.password, values.remember)
            }
        });
    }

    @autobind
    onForgot() {
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
        });
    }

    renderForm() {
        const {getFieldDecorator} = this.props.form;

        let alert = null;

        let token = this.props.token;
        if (token !== null && token.error !== null) {
            alert = (
                <Alert
                    message={token.error}
                    description={token.error_description}
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
                    <a className="login-form-forgot" onClick={this.onForgot}>Forgot password</a>
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

    render() {
        return <div style={{padding: 24}}> {this.renderForm()}</div>
    }
}

AuthForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    remember: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    token: PropTypes.shape({
        access_token: PropTypes.string,
        error: PropTypes.string,
        error_description: PropTypes.string
    }).isRequired

};
export default AuthForm = Form.create()(AuthForm);

