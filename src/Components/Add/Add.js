import React, { Component } from 'react'
import './Add.css'
import Axios from 'axios'

class Add extends Component {
    state = {
        description: ''
    }

    handleChangeDescription = (e) => {
        console.log(this)
        this.setState(
            {[e.target.id]: e.target.value}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/todos', {
            ...this.state
        }).then(postedTodo => {
            console.log(postedTodo)
            this.props.getTodos()
        }, this.setState({
            description: ''
        }))
    }

    render() {
      return (
          <div className="Add-container">
              <form className="form" method='POST' onSubmit={this.handleSubmit}>
                  <input id='description' type="text" placeholder='Add new todo' className="input-field" onChange={this.handleChangeDescription} value={this.state.description} required/>
                  {/* <button type="submit" className="Add-button">+</button> */}
              </form>
          </div>
      )
    }
}

export default Add