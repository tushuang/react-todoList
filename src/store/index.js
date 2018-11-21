import {createStore,applyMiddleware} from 'redux'
import reducer from './redux'
import { composeWithDevTools } from 'redux-devtools-extension'  // 开发者工具可以查看store的状态啊
import thunk from 'redux-thunk'       // 处理异步动作的中间件
import promiseMiddleware from 'redux-promise-middleware'   // 同上 两个中选一个ok

let store = createStore(reducer,
    // applyMiddleware(thunk)
    applyMiddleware(promiseMiddleware())
   
) // redux是一个函数

export default store