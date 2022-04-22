import React from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import useTodos from "./hooks/useTodos";
import AddTodo from "./components/AddTodo";

export default function App() {
    const {todos, addTodo} = useTodos();

  return (
    <div className="App">
      <h1>ToDo App</h1>
        <AddTodo addTodo={addTodo}/>
        <TodoBoard todos={todos}/>
    </div>
  );
}
