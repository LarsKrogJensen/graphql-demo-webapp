import React from "react";
import {Icon, Alert, Row, Col, Input, Table} from "antd"
import {browserHistory} from "react-router"
import {autobind} from "core-decorators";

const Search = Input.Search;

export default class SearchForm extends React.Component {

    @autobind
    onSearchtextChanged(evt) {
        console.log("Search text changed: " + evt.target.value);
        this.props.search(evt.target.value)
    }

    render() {
        let locale = {
            emptyText: <span><Icon type="frown-o"/>Nothing found</span>,
        };

        let token = this.props.token;
        if (token == null) {
            return (
                <div style={{padding: 24}}>
                    < Alert
                        message="Not authenticated"
                        description="This page requires a valid token, please sign in and try again"
                        type="error"
                        showIcon
                        closable
                        closeText="LOG IN"
                        onClose={() => {
                            browserHistory.push({pathname: "/auth", query: {goto: "/search"}})
                        }}
                    />
                </div>
            )
        }

        return (
            <div style={{padding: 24}}>
                <Row style={{paddingBottom: 24}} gutter={10}>
                    <Col span={24}>
                        <Search
                            placeholder="input search text"
                            style={{width: 200}}
                            defaultValue={this.props.searchQuery}
                            onChange={this.onSearchtextChanged}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table dataSource={this.props.result}
                               pagination={false}
                               rowKey="id"
                               loading={this.props.loading}
                               locale={locale}
                               bordered={false}
                               size="small">
                            <Table.Column title='Id'
                                          key="id"
                                          dataIndex='id'
                                          width={100}/>
                            <Table.Column title='Score'
                                          key="score"
                                          dataIndex='score'
                                          width={150}/>
                            <Table.Column title='Name'
                                          key="name"
                                          dataIndex='name'
                                          width={150}/>
                            <Table.Column title='Long Name'
                                          key="longName"
                                          dataIndex='longName'/>
                        </Table>
                    </Col>
                </Row>
            </div>)
    }
}

SearchForm.propTypes = {
    // appModel: React.PropTypes.instanceOf(AppModel).isRequired
};