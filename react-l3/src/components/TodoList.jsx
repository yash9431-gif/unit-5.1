import React from 'react'

const TodoList = ({todos,children}) => {
    return (
        <div>
   <h3>Here is your todo list</h3>
       
        <ul>
           {children}
            </ul>
             </div>
  )
}

export default TodoList