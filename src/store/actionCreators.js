import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_LIST_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

export const getListChangeAction = () => {
    return {
        type: CHANGE_LIST_VALUE
    }
}

export const getDeleteItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})

export const initListAction = (data) => {
    return {
        type: INIT_LIST_ACTION,
        data
    }
}

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const action = initListAction(res.data);
            dispatch(action);
        })
    }
}