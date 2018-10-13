import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }


    // 当一个组件从父组件接受了参数
    // 只要父组件的render被重新执行，子组件的生命周期函数就会被执行
    // 如果这个组件第一次存在于父组件中，不会被执行
    componentWillReceiveProps() {
        // console.log('child componentWillReceiveProps')
    }

    // 当组件即将被移出
    componentWillUnmount() {
        // console.log('child componentWillUnmount')
    }


    render() {
        const { content, test } = this.props;
        return (
            <Fragment>
                <div
                    onClick={this.handleClick}>
                    {test} - {content}
                </div>
            </Fragment>
        );
    }

    handleClick() {
        const { handleItemDelete, idx } = this.props;
        handleItemDelete(idx)
    }
}

// 限制传值类型
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, //isRequired 必须传递
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // number 或 string
    handleItemDelete: PropTypes.func,
    idx: PropTypes.number
}

// 默认值
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;