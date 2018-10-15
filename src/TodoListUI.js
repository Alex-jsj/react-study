import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';

class TodolistUI extends Component {

    render() {
        return (
            <Fragment>
                <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                    <Input
                        value={this.props.inputVal}
                        placeholder="请输入内容"
                        style={{ width: 300, marginRight: 10 }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleChangeList}>提交</Button>
                    <List
                        style={{ marginTop: '10px', width: '300px' }}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.deleteItem(index) }}>{item}</List.Item>)}
                        locale={{ emptyText: '暂无数据' }}
                    />
                </div>
            </Fragment>
        )
    }

}
export default TodolistUI;