import React, { useState } from "react";
import "./index.css";
import { Todos } from '../../App';

interface IProps {
  todos: Todos[];
  updateTodo: (id: string, done: boolean) => void;
  deleteTodo: (id: string) => void;
}

interface IProps1 extends Todos {
  updateTodo: (id: string, done: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default function index(props: IProps) {
  const { todos } = props;
  return (
    <div className="list">
      <ul>
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />;
        })}
      </ul>
    </div>
  );
}

function Item(props: IProps1) {
  const { id, name, done, updateTodo, deleteTodo } = props;
  const [mouse, setMouse] = useState(false);
  //设置鼠标是否悬浮标志值
  const handleMouse = (flag: boolean) => {
    setMouse(flag);
  };
  //更新是否选中的状态
  const handleCheck = (id: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      updateTodo(id, event.target.checked);
    };
  };
  //删除todo
  const handleDelete = (id: string) => {
    return () => {
      deleteTodo(id);
    };
  };
  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <label>
        <input type="checkbox" checked={done} onChange={handleCheck(id)} />
        <span className="listspan">{name}</span>
        <button
          onClick={handleDelete(id)}
          style={{ display: mouse ? "inline-block" : "none" }}
          className="listbutton"
        >
          删除
        </button>
      </label>
    </li>
  );
}
