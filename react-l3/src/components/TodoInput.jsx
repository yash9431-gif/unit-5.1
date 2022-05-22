import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value,setValue] = useState("")
  return (
      <div>TodoInput
          <input type="text"
              value={ value}
              placeholder='"new todo item'
             onChange={(e)=>{setValue(e.target.value)}} />
          

          <button onClick={() => {
             
              addTodo(value)
              setValue("")
    }}>ADD</button>
    </div>
  )
}

export default TodoInput