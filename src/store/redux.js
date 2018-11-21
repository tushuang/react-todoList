import {combineReducers} from 'redux'

import todos from './todos/reducer'
import count from './count'
import load from './loading'

const reducer = combineReducers({
    todos,count,load
})

export default reducer