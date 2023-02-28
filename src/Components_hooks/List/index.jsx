import React, { useState } from "react";
import "./index.css";

export default function index(props) {
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

function Item(props) {
  const { id, name, done, updateTodo, deleteTodo } = props;
  const [mouse, setMouse] = useState(false);
  //设置鼠标是否悬浮标志值
  const handleMouse = (flag) => {
    setMouse(flag);
  };
  //更新是否选中的状态
  const handleCheck = (id) => {
    return (event) => {
      updateTodo(id, event.target.checked);
    };
  };
  //删除todo
  const handleDelete = (id) => {
    return () => {
      deleteTodo(id);
    };
  };
  return (
    <li
      style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      onMouseEnter={()=>handleMouse(true)}
      onMouseLeave={()=>handleMouse(false)}
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
