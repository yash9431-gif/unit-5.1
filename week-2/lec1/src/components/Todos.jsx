import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [newTodo, setNewTodo] = useState([])
    const [todos, setTodos] = useState([]);

    const saveInfo = () => {
        fetch("http://localhost:8080/todos", {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                value: newTodo,
                isCompleted: true
            })
        })
            .then((r) => r.json())
            .then((d) => {
                setTodos([...todos, d]);
                setNewTodo("")
                
        })
           
    
    }


    useEffect(() => {
        
        fetch("http://localhost:8080/todos?_page=2&_limit=4").then((r) => r.json()).then((d) => {
            setTodos(d)
        })
    }, [])
    
    return (
        <div>
            Todos
            <div>

                <div>
                    <input onChange={(e) => setNewTodo(e.target.value)} />
                    <button onClick={saveInfo}>+</button>
                    
                </div>

                {todos.map((todo) => (
                    <div key={todo.id}>{todo.value}</div>
                ))}
            </div>
        </div>
    )
}

   
 

export default Todos