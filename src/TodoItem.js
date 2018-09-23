import React, { Component, Fragment } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div
                    onClick={this.handleClick}>
                    {this.props.content}
                </div>
            </Fragment>
        );
    }

    handleClick() {
        this.props.handleItemDelete(this.props.idx)
    }
}

export default TodoItem;