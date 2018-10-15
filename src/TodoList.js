import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getListChangeAction, getDeleteItemAction } from './store/actionCreators';
import TodolistUI from './TodoListUI'


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodolistUI
                inputVal={this.state.inputVal}
                handleInputChange={this.handleInputChange}
                handleChangeList={this.handleChangeList}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
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