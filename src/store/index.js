import {createStore} from 'redux'
import reducer from './redux'
import { composeWithDevTools } from 'redux-devtools-extension'


let store = createStore(reducer,composeWithDevTools()) // redux是一个函数

export default store