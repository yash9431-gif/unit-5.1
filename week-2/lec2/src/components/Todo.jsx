import React  from "react";
import axios from "axios"
import { useEffect } from 'react';
import { useState } from "react";

const Todo = () => {
      const [limit, setLimit] = useState(1)
  const [totalCount,setTotalCount]=useState(0)
  const [page,setPage] = useState(1)
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
      setTodos(r.data)
      setTotalCount(Number.parseFloat(r.headers["x-total-count"]))
    }
   getTodo()
  }, [page,limit]);
  return (
       <div className="App">

      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>{"<"}</button>
      <select onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
        <button
      disabled={totalCount<page*limit}
        onClick={() => setPage(page + 1)}>{">"}</button>
    
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value} {`:`} { todo.value} </div>
      ))}
      
    
    </div>
  )
}

export default Todo