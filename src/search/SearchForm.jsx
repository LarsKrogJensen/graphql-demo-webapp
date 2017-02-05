import React, {PropTypes} from "react";
import {
    Icon,
    Modal,
    Row,
    Col,
    Input,
    Table
} from "antd"
import {autobind, debounce} from "core-decorators";
import AuthContainer from "auth/AuthContainer"
import "./search-form.css"

const Search = Input.Search;

export default class SearchForm extends React.Component {

    // @autobind
    // @debounce
    // onSearchtextChanged(evt) {
    //     console.log("Search text changed: " + evt.target.value);
    //     this.searchDebounced(evt.target.value)
    // }

    @autobind
    @debounce(300)
    searchDebounced(searchQuery) {
        this.props.search(searchQuery)
    }

    @autobind
    onRowClick(record, index) {
        console.log(`Row clicked [${index}] record: ${record}`)
    }

    render() {
        let locale = {
            emptyText: <span><Icon type="frown-o"/>Nothing found</span>,
        };

        let token = this.props.token;
        if (token == null || token === "") {
            return (
                <div style={{padding: 24}}>

                    <Modal title="Please sign in" visible={true} closable={false}
                           footer={[]}>
                        <AuthContainer/>
                    </Modal>
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
                            onChange={(evt) => this.searchDebounced(evt.target.value)}/>
                    </Col>
                </Row>
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
    search: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    searchResult: PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string,
        score: React.PropTypes.number,
        name: React.PropTypes.string,
        longName: React.PropTypes.string,
    }))
};