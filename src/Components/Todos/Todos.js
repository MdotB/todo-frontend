import React from 'react'
import Add from '../Add/Add'
import './Todos.css'

const Todos = ({ todos, getTodos, completeTodo }) => {

    const todoList = todos.length ? (
      todos.filter(completedTodo => completedTodo.completed === false ).map(todo => {
          return (
            <div onClick={() => completeTodo(todo._id)} className="Todos-each" key={todo._id}>
              <span>{todo.description}</span>
            </div>
          )
      })
    ) : (
        <p>No todos left!</p>
    )
    
    return (
        <div className="Todos-container">
          {todoList}
          <Add getTodos={getTodos}/>
        </div>
    )
}

export default Todos