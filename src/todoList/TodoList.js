import React, { Component } from 'react'
import TodoContent from './TodoContent' 
import store from '../store'
import action from '../store/todos/action'
import uuid from 'uuid/v1'

class TodoList extends Component  {
    render(){
        return (
            <div className="container todo-box">

                <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>

                <input onKeyUp = {this.addState} type="text" className="form-control"/>
                <TodoContent/>
            </div>
        )
    }
    // 按下回车键提交状态 相当于更改了状态 于是listitem的状态也会更新
    addState=(e)=>{
        if(e.keyCode === 13){
            if( e.target.value=='' ) return false
            let listItem = { id: uuid(), title: e.target.value, isFinished: false,isUpdate:false}
            // 当用户在视图层产生操作时 action提交dispatch来分发状态 给reducer
            store.dispatch( action.addtodo( listItem ) )
            e.target.value = ''
        }
    }
}

export default TodoList