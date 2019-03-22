import React from 'react'
var reactDOM = require('react-dom'); // importa a lib react-dom


import Todo from './components/todoList/Todo'



reactDOM.render(
    <div className="main-container">
        <Todo />
    </div>, 
    document.getElementById('app')
);