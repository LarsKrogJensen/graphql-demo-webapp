import React from "react";
import {Icon,Alert, Row, Col, Input, Table} from "antd"
import {browserHistory} from "react-router"
import {autobind} from "core-decorators";

const Search = Input.Search;

export default class SearchView extends React.Component {


    constructor()
    {
        super();
        this.state ={
            loading: false,
            table:[],
            searchText: "",
        }
    }

    @autobind
    onSearchtextChanged(evt) {
        console.log("Search text changed: " + evt.target.value)
    }

    render()
    {
        let locale = {
            emptyText: <span><Icon type="frown-o"/>Nothing found</span>,
        };

        let token = this.props.token;
        if (token == null || token.access_token == null) {
            return (
                    <Alert
                            message="Not authenticated"
                            description="This page requires a valid token, please sign in and try again"
                            type="error"
                            showIcon
                            closable
                            closeText="LOG IN"
                            onClose={() =>
                            {
                                browserHistory.push({pathname: "/auth", query: {goto: "/search"}})
                            }}
                    />
            )
        }

        return <div style={{padding: 24}}>
            <Row style={{paddingBottom: 24}} gutter={10}>
                <Col span={24}>
                    <Search
                            placeholder="input search text"
                            style={{width: 200}}
                            defaultValue={this.state.searchText}
                            onChange={this.onSearchtextChanged}
                            onSearch={(value) => console.log(value)}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table dataSource={this.state.table}
                                 pagination={false}
                                 rowKey="id"
                                 loading={this.state.loading}
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
        </div>
    }
}

SearchView.propTypes = {
    // appModel: React.PropTypes.instanceOf(AppModel).isRequired
};