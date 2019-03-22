import React, { Component } from 'react'
import TodoTitle from './TodoTitle'

let mock = require('../../../mock/todo-list/todo-list.json');


export default class Todo extends Component {
  
  componentWillMount() {
    this.setState({ 
      todolist : mock
    });
  }


  render() {
    return (
      <div>
         <TodoTitle />
         <div>
         Componente de Todo 
         Deverá importar o Todo title ,
         E o todo list
         </div>
         { this.state.todolist &&
          <div>
            <h1>Dados que devem ser exibidos</h1>
            <code>
            {JSON.stringify(this.state.todolist )}
            </code>
          
            </div>
          }
      </div>
    )
  }
}
