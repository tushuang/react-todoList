
import * as types from './action-types'
import axios from 'axios'

const action = {
    addNum (num) {
        return {
            type:types.ADD_NUM,
            num
        }
    },
    asyncAction (){
        // return (dispatch)=>{   // thunk 不再返回一个对象 而是一个函数
        //     axios({
        //         url:'/mock/data.json' 
        //     }).then((res)=>{
        //         console.log(res)
        //         let action = {type:types.ASYNC_ACTION,num:~~res.data.num}
        //         dispatch(action)
        //     })
        // }
        return {               // 参数需要写成payload 返回异步动作 这里不是真正的dispatch 中间件会来处理 然后提交
                            // 三个dispatch type类型分别为 ASYNC_ACTION_PENNING 加载中 FULFILLED 加载完成 。。。。加载失败
            type:types.ASYNC_ACTION,
            payload: axios.get('/mock/data.json')
        }
    }
}

export default action