import React from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import useTodos from "./hooks/useTodos";
import AddTodo from "./components/AddTodo";

function App() {
    const todos = useTodos();

  return (
    <div className="App">
      <h1>ToDo App</h1>
        <TodoBoard todos={todos}/>
        <AddTodo/>
    </div>
  );
}

export default App;
