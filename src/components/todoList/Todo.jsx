import React, { Component } from 'react'
import TodoTitle from './TodoTitle'

import './css/default.css'
let mock = require('../../../mock/todo-list/todo-list.json');


//este componente é um container

export default class Todo extends Component {
  
  componentWillMount() {
    this.setState({ 
      todolist : mock
    });
  }


  render() {
    return (
      <div className='todo-container'>
         <TodoTitle />
         <div>
         Componente de Todo 
         Deverá importar o Todo title ,
         E o todo list
         </div>
         { this.state.todolist &&
          <section className="todo-informacoes-desenvolvimento">
            <h3>Dados que devem ser exibidos</h3>
            <pre>
            {JSON.stringify(this.state.todolist, null, 2 )}
            </pre>
          
            </section>
          }
      </div>
    )
  }
}
