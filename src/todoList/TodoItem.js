

import React,{Component} from 'react'
import store from '../store'
import action from '../store/todos/action'

console.log(store)

class TodoItem extends Component {
    render(){
        let {isFinished:_todos} = this.props
        return(
            <>
            {
                _todos.map(item=>{
                    return (
                        <li key = {item.id} className="list-group-item">
                            <div className="row">
                                <input  onChange = {this.changeChecked.bind(null,item.id)} defaultChecked = {item.isFinished} className="col-xs-1" type="checkbox" />
                                <div className="title col-xs-8">
                                    { item.isUpdate? 
                                    <input onBlur = {this.update.bind(null,item.id)} ref={'input'} type="text" />:
                                    <span onClick = {this.changeTitle.bind(null,item.id,item.title)}>{item.title}</span>}
                                </div>
                                <button  onClick = {this.deleteList.bind(null,item.id)}  type="button" className="close col-xs-1" ><span>×</span></button>
                            </div>
                        </li>)
                })
            }
            </>
            
        )
    }
    // 点击 删除对应的状态
    deleteList = (id) => {
        store.dispatch(action.deleteTodo(id))
    }
    changeChecked = (id) => {
        store.dispatch(action.changeChecked(id))
    }
    changeTitle = (id,title,e) => {
        store.dispatch(action.changeUpdate(id))
        setTimeout(()=>{
            this.refs.input.value = title
            this.refs.input.focus()
        },0)
    }
    update = (id,e) => {
        store.dispatch(action.changeUpdate(id))
        let title = e.target.value
        store.dispatch(action.updateTitle(id,title))
    }
}

export default TodoItem