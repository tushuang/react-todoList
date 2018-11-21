
const reduxer = (preState = {
    isLoading: false
},action)=>{
    // 由于store 是唯一数据源 所有在这里可以得到所有action
    let newState = Object.assign({},preState)
    if(action.type === 'ASYNC_ACTION_PENDING'){
        newState.isLoading = true
    }
    if(action.type === 'ASYNC_ACTION_FULFILLED' || action.type === 'ASYNC_ACTION_REJECTED'){
        newState.isLoading = false
    }
    return newState
}

export default reduxer