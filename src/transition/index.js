import React,{Component} from 'react';
import './style.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import uuid from 'uuid'


// CSSTransition 针对的是 元素组件的显示和隐藏
class Example extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShow : true
        }
    }
    render() {
        let {isShow} = this.state
        return(
            <div>
            <CSSTransition
            timeout={300}
            unmountOnExit
            in = {this.state.isShow}  //控制进入消失的数据
            classNames="msg"
            appear = {true}
            >
            {   // 写成一个函数时 可以接受状态
                (state) => (<h3 >Hello World -- {state}</h3>)
            }
            </CSSTransition>{console.log(this.state.isShow)}
            <button onClick = {() => this.setState({isShow : !this.state.isShow})} >toggle</button>
            
            </div>
        )
    }

}


// TransitionGroup 针对的是列表元素的新增和删除的动画

// class Example extends Component {
//     state = {
//         isShow: true,
//         items: [
//             {id: uuid(), text: 'Hello World'},
//             {id: uuid(), text: 'Hello React'},
//         ]
//     }
//     render() {
//         let {isShow} = this.state
//         return(
//             <div>
//                 <TransitionGroup>
//                     {
//                         this.state.items.map(item => {
//                             return (
//                                 <CSSTransition
//                                 key = {item.id}
//                                 classNames = 'msg'
//                                 timeout = {300}
//                                 >
//                                 {
//                                     (state) => (<h3 >{item.text} -- {state}</h3>)
//                                 }
//                                 </CSSTransition>
//                             )
//                         })
//                     }
//                 </TransitionGroup>
//                 <button onClick = {()=>{
//                     this.setState(preState=>{
//                         preState.items = [...preState.items,{id: uuid(), text: 'Hello Transition'}]
//                         return preState     
//                     })
//                 }}>add</button>
//             </div>
//         )
//     }

// }

export default Example

