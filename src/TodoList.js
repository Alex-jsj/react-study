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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <TodoItem
                                        content={item}
                                        idx={index}
                                        handleItemDelete={this.handleItemDelete.bind(this)}
                                    />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() {
        this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }
}

export default TodoList;
