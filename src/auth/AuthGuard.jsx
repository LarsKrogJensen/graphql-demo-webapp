import React from "react";
import AuthContainer from "auth/AuthContainer";
import {Modal} from "antd";

function withAuth(WrappedComponent) {
    return class extends React.Component {
        render() {
            let token = this.props.token;
            if (!this.props.embedded && !token) {
                return (
                    <div style={{padding: 24}}>
                        <Modal title="Please sign in" visible={true} closable={false}
                               footer={[]}>
                            <AuthContainer/>
                        </Modal>
                    </div>
                )
            }

            return <WrappedComponent {...this.props}/>
        }
    }
}

export default withAuth;