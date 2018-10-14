import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getListChangeAction, getDeleteItemAction } from './store/actionCreators';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <Fragment>
                <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                    <Input
                        value={this.state.inputVal}
                        placeholder="请输入内容"
                        style={{ width: 300, marginRight: 10 }}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleChangeList}>提交</Button>
                    <List
                        style={{ marginTop: '10px', width: '300px' }}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                        locale={{ emptyText: '暂无数据' }}
                    />
                </div>
            </Fragment>
        )
    }

    handleInputChange = function (e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleChangeList = function () {
        const action = getListChangeAction();
        store.dispatch(action);
    }

    deleteItem = function (index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange = function () {
        this.setState(store.getState())
    }
}

export default TodoList;