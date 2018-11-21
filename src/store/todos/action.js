

import {ADD_TODO,
    DELETE_TODO,
    CHANGE_CHECKED,
    UPDATE_TITLE,
    CHANGE_UPDATE
}  from './action-type'

const action = {
    addtodo(list){
        return {
            type:ADD_TODO,
            list
        }
    },
    deleteTodo(id){
        return {
            type : DELETE_TODO,
            id
        }
    },
    changeChecked (id) {
        return {
            type : CHANGE_CHECKED,
            id
        }
    },
    changeUpdate (id){
        return {
            type : CHANGE_UPDATE,
            id
        }
    },
    updateTitle (id,title) {
        return {
            type : UPDATE_TITLE,
            id,
            title
        }
    }
}

export default action