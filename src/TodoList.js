import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from "axios";

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

    // 在组件即将被挂载到页面的时刻执行
    componentWillMount() {
        // console.log('componentWillMount')
    }
    // 在组件被更新之前执行
    shouldComponentUpdate = (nextProps, nextState) => {
        // console.log('shouldComponentUpdate')
        return true;
    }
    // 在组件即将更新之前执行 shouldComponentUpdate 返回true才执行
    componentWillUpdate = () => {
        // console.log('componentWillUpdate')
    }
    // 在组件更新完成执行
    componentDidUpdate = () => { }

    //挂载页面
    render() {
        // console.log('render')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input type="text"
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(val) => { this.input = val }}
                    />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }
    // 在组件被挂载到页面之后执行
    componentDidMount() {
        //ajax
        axios.get('/api/todoList')
            .then(() => {
                console.log('success')
            })
            .catch(() => {
                console.log('error')
            })
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

    handleInputChange() {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            inputValue: '',
            list: [...prevState.list, prevState.inputValue]
        }), () => {

        })
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
