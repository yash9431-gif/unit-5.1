
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

function App() {
  const [toggle,setToggle]= useState(false)
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show Todo App" : "Show Counter App"}
      </button>
     
      {toggle ? <Counter /> : <TodoApp />}
      
     
    </div>
  );
}

export default App;
