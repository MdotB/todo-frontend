import React, { Component } from 'react';
import Todos from './Components/Todos/Todos'
import './App.css';
import Axios from 'axios'

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    console.log('Component mounted...')
    this.getTodos()
  }

  getTodos = () => {
    fetch('http://localhost:4000/todos')
    .then(res => res.json())
    .then(todos => this.setState({
      todos: todos
    }))
  }

  completeTodo = (id) => {
    Axios.patch(`http://localhost:4000/todos/${id}`)
    .then(res => {
      console.log(res)
      this.getTodos()
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>

        <Todos
          className="Todos-container"
          todos={this.state.todos}
          getTodos={this.getTodos}
          completeTodo={this.completeTodo}
        />
        <footer className="App.footer">
          <p>Created by Mike Bell</p>
        </footer>
      </div>
    )
  }
  
}

export default App;
