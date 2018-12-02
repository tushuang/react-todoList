
import React,{Component} from 'react'
import HandleState from '../common'
import action from '../store/count/action'
import store from '../store'


class Counter extends Component {
    render () {
        console.log(this.props)
        return (
            <>
                <p>{this.props.value}</p>
                <button onClick = {()=>{
                    store.dispatch(action.addNum(2))
                }}>+2</button>
                <button onClick = {()=>{
                    store.dispatch(action.asyncAction())
                }}>asyncAction</button>
            </>
        )
    }
}

export default HandleState(Counter,'count')