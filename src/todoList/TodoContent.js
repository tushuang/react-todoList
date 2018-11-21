

import React,{Component} from 'react'
import store from '../store'
import TodoItem from './TodoItem'


//  控制item渲染的次数

class TodoContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            //  在得到状态的时候 需要先找到对应的redux名
            types:store.getState().todos.type,
            finished:[],
            unfinish:[]
        };
        store.subscribe(()=>{
            let finished = store.getState().todos.list.filter(item => {
                return item.isFinished === true})
            let unfinish = store.getState().todos.list.filter(item => item.isFinished === false)
            this.setState({
                finished : finished,
                unfinish : unfinish
            }) 
        })
    }
    render(){
        let {types,finished,unfinish} = this.state
        return( 
            <>
            {
                types.map(item=>{
                    return (
                    <div key = {item.id} className="todo-content">
                        <h3> {item.title} <span className="label label-primary pull-right">{item.type?finished.length:unfinish.length}</span> </h3>
                        <ul className="list-group">            
                            {/* 给子元素传入对应的类型不同的类型显示在不同的标题下 */}
                            <TodoItem isFinished = {item.type?finished:unfinish} />
                        </ul>
                    </div>)
                })
            }
            </>
            
        )
    }
}
export default TodoContent

