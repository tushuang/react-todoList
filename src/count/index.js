

import React,{Component} from 'react'
import store from '../store'
import action from '../store/count/action'

class Counter extends Component {
    constructor (props){
        super (props)
        this.state = {
            num : store.getState().count.value
        }
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                num : store.getState().count.value
            })
        })
    }
    render () {
        return (
            <>
                <p>{this.state.num}</p>
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

export default Counter