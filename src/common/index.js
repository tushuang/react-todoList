
//  整一个高阶组件

import React,{Component} from 'react'
import store from '../store'

const  HandleState = (UI,reducer) => { // 只发送reducer的type类型
    return class extends Component {
        constructor (props){
            super (props)
            this.state = {
                data : store.getState()[reducer]
            }
        }
        componentWillMount(){
            store.subscribe(()=>{
                this.setState({
                    data : store.getState()[reducer]
                })
            })
        }
        render(){
            return(
                <UI {...this.state.data}/>
            )
        }
    }
}

export default HandleState