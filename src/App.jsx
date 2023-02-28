import "./App.css";
import Header from "./Components_hooks/Header";
import List from "./Components_hooks/List";
import Footer from "./Components_hooks/Footer";
import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "eat", done: true },
    { id: 2, name: "play", done: false },
    { id: 3, name: "shop", done: false },
  ]);
  //添加todo
  const addTodo = (todo) => {
    setTodos([ todo, ...todos ]);
  };
  //更新是否选中的状态
  const updateTodo = (id, done) => {
    const newtodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    setTodos(newtodos);
  };
  //删除todo
  const deleteTodo = (id) => {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  };
  //全选todo
  const checkAllTodo = (done) => {
    const newtodos = todos.map((todo) => {
      return { ...todo, done };
    });
    setTodos(newtodos);
  };
  //清除已完成任务
  const clearAllTodo = () => {
    const newtodos = todos.filter((todo) => !todo.done);
    setTodos(newtodos);
  };
  return (
    <div className="App">
      <div className="container">
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer
          todos={todos}
          checkAllTodo={checkAllTodo}
          clearAllTodo={clearAllTodo}
        />
      </div>
    </div>
  );
}
