import React from "react";
import { nanoid } from "nanoid";
import "./index.css";
import { Todos } from "../../App"

interface IProps {
  addTodo: (todo: Todos) => void;
}

export default function index(props: IProps) {
  const handleKeyUp = (event: React.KeyboardEvent) => {
    const { target, code } = event;
    if (code !== "Enter") return;
    if ((target as HTMLInputElement).value.trim() === "") {
      alert("Empty!");
      return;
    }
    const todo: Todos = { id: nanoid(), name: (target as HTMLInputElement).value, done: false };
    const { addTodo } = props;
    addTodo(todo);
    (target as HTMLInputElement).value = "";
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
