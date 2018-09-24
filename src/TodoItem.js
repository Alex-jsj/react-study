import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
    content: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // number 或 string
    handleItemDelete: PropTypes.func,
    idx: PropTypes.number
}

// 默认值
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;