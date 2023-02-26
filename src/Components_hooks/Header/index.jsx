import React from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default function index(props) {
  const handleKeyUp = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("Empty!");
      return;
    }
    const todo = { id: nanoid(), name: target.value, done: false };
    const { addTodo } = props;
    addTodo(todo);
    target.value = "";
  };
  return (
    <div className="header">
      <input
        onKeyUp={handleKeyUp}
        className="headerinput"
        type="text"
        placeholder="输入内容"
      />
    </div>
  );
}
