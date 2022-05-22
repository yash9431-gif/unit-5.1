import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

import TodoList from './TodoList'

const TodoApp = () => {
    const [todos, setTodos] = useState([])
   
    const addTodo = (xyz) => {
        setTodos([...todos, xyz])
       }

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
  }

     
  return (
      <div>TodoApp
          <TodoInput addTodo={addTodo}/>
          <TodoList >
     {
     todos.map((todo) => (
       <TodoItem value={todo} deleteTodo={deleteTodo}/>
            ))
      }

          </TodoList>
          

    </div>
  )
}

export default TodoApp