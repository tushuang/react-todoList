
import * as types from './action-types'

const reducer = (
    preState = { value: 8 },
    action
)=>{
    console.log(action)
    let newState = Object.assign({},preState)
    if(action.type === 'ASYNC_ACTION_FULFILLED'){
        newState.value += ~~action.payload.data.num;
    }
    switch (action.type) {
        case types.ADD_NUM : 
            newState.value += action.num;break
        // case types.ASYNC_ACTION :
        //     newState.value += action.num;break
        default: return newState
    }
    return newState
}

export default reducer