import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input type="text"
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={item}
                    content={item}
                    idx={index}
                    handleItemDelete={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            inputValue: '',
            list: [...prevState.list, prevState.inputValue]
        }))
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        });
    }
}

export default TodoList;
