import React, { Component } from 'react'
import TodoTitle from './TodoTitle'

export default class Todo extends Component {

  
  componentWillMount() {
    
  }
    

  render() {
    return (
      <div>
          <TodoTitle />
         Componente de Todo 
         Deverá importar o Todo title ,
         E o todo list
      </div>
    )
  }
}
