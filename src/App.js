import "./App.css";
import React from "react";
import TodoLine from "./TodoLine";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(e.target.value);
      e.target.value = "";
    }
  };

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const changeTodo = (todoId, newValue) => {
    const newTodos = todos.slice();
    newTodos[todoId] = newValue;
    setTodos(newTodos);
  };

  const deleteToDo = (todoId) => {
    const newTodos = todos.slice();
    newTodos.splice(todoId, 1);
    setTodos(newTodos);
  };

  const renderTodos = () => {
    return todos.slice().map((todo, index) => {
      return (
        <TodoLine
          key={index}
          id={index}
          value={todo}
          changeToDo={changeTodo}
          deleteToDo={deleteToDo}
        />
      );
    });
  };

  return (
    <div className="App">
      <h1>Todo de ses morts</h1>
      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="todo-input"
          onKeyDown={handleKeyDown}
          placeholder="Ajouter une tâche"
        ></input>
        <button className="todo-button" onClick="">Ajouter</button>
      </form>
      <div>{renderTodos()}</div>
    </div>
  );
}

export default App;
