import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_LIST_ITEM } from './actionTypes'

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