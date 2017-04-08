// @flow
import React from "react";
import PropTypes from 'prop-types';
import {
    Alert,
    Icon,
    Modal,
    Row,
    Col,
    Input,
    Table
} from "antd"
import {autobind, debounce} from "core-decorators";
import AuthContainer from "../auth/AuthContainer"
import "./search-form.css"

const Search = Input.Search;

// type SearchProps = {
//     search: (query: String) => Promise<any>,
//     searchQuery: string,
//     token: string,
//     loading: boolean,
//     error: ?string,
//     error_description: ?string,
//     searchResult: Array<SearchItem>
// }

export default class SearchForm extends React.Component {
    
    @autobind
    @debounce(300)
    searchDebounced(searchQuery: string) {
        this.props.onSearch(searchQuery)
    }

    @autobind
    onRowClick(record: any, index: number) {
        console.log(`Row clicked [${index}] record: ${record}`)
    }

    render() {
        let locale = {
            emptyText: <span><Icon type="frown-o"/>Nothing found</span>,
        };

        let token = this.props.token;
        if (token === null || token === "") {
            return (
                <div style={{padding: 24}}>

                    <Modal title="Please sign in" visible={true} closable={false}
                           footer={[]}>
                        <AuthContainer/>
                    </Modal>
                </div>
            )
        }
        let alert;
        if (this.props.error !== null) {
            alert = <Alert message={"Search failed: " + this.props.error_description} type="error" />
        }

        return (
            <div style={{padding: 24}}>
                <Row style={{paddingBottom: 24}} gutter={10}>
                    <Col span={24}>
                        <Search
                            placeholder="input search text"
                            style={{width: 200}}
                            defaultValue={this.props.searchQuery}
                            onChange={(evt) => this.searchDebounced(evt.target.value)}/>
                    </Col>
                </Row>
                {alert}
                <Row>
                    <Col span={24}>
                        <Table dataSource={this.props.searchResult}
                               pagination={false}
                               rowKey="id"
                               loading={this.props.loading}
                               locale={locale}
                               bordered={false}
                               onRowClick={this.onRowClick}
                               size="small">
                            <Table.Column title='Id'
                                          key="id"
                                          className="hand"
                                          sorter={true}
                                          dataIndex='id'
                                          width={100}/>
                            <Table.Column title='Score'
                                          key="score"
                                          className="hand"
                                          dataIndex='score'
                                          width={150}/>
                            <Table.Column title='Name'
                                          key="name"
                                          sorter={true}
                                          className="hand"
                                          dataIndex='name'
                                          width={150}/>
                            <Table.Column title='Long Name'
                                          key="longName"
                                          className="hand"
                                          dataIndex='longName'/>
                        </Table>
                    </Col>
                </Row>
            </div>)
    }
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    error_description: PropTypes.string,
    searchResult: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        score: PropTypes.number,
        name: PropTypes.string,
        longName: PropTypes.string,
    }))
};