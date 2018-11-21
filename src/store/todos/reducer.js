

// reducer 是一个函数 在一开始可以给store返回默认状态，在这里修改state，每次修改state
// 都要提交dispatch 包括第一次返回默认状态
// reducer 是一个纯函数 输入对应唯一的输出

import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_CHECKED,
    UPDATE_TITLE,
    CHANGE_UPDATE
} from './action-type'

const todos = (preState = {list:[],type:[
    {id: 1, title: '未完成', type: false},
    {id: 2, title: '已完成', type: true}        
]},action)=>{  // list , type
    let newState = JSON.parse(JSON.stringify(preState))  

    switch ( action.type ){
        case ADD_TODO: 
            newState.list.push(action.list);
            break;

        case DELETE_TODO:
            newState.list = newState.list.filter( item => {  
                return item.id !== action.id} )
            break;
        case CHANGE_CHECKED:
            newState.list.forEach(item=>{
                if(item.id === action.id) item.isFinished = !item.isFinished
            })
            break;
        case UPDATE_TITLE:
            newState.list.forEach(item=>{
                if(item.id === action.id) item.title = action.title
            })
            break;
        case CHANGE_UPDATE:
            newState.list.forEach(item=>{
                if(item.id === action.id) item.isUpdate = !item.isUpdate
            })
            break;
        default: break;
    }
    return newState
}


// 

export default todos