import React, { Component } from 'react';
// import TodoList from './todoList/TodoList'
// import Example from './transition/index'
import Counter from './count'
import './App.css';
import store from './store'

class App extends Component {
  state = {
    isLoading : store.getState().load.isLoading
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        isLoading:store.getState().load.isLoading
      })
    })
  }
  render() {

    return (
      <div className="App">
        <Counter/>
        {this.state.isLoading}
        {/* store中的loading 管理这个状态*/}
        { this.state.isLoading && <p>加载中</p>}   
      </div>
    );
  }
}

export default App;
