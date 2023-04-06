import React from "react";
import "./index.css";
import { Todos } from '../../App';

interface IProps {
  todos: Todos[];
  checkAllTodo: (done: boolean) => void;
  clearAllTodo: () => void;
}

export default function index(props: IProps) {
  const { todos, checkAllTodo, clearAllTodo } = props;
  const doneTodo = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
  const total = todos.length;
  //全选todo
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkAllTodo(event.target.checked);
  };
  //清除已完成任务
  const handleClearAll = () => {
    clearAllTodo();
  };
  return (
    <div className="footer">
      <label>
        <input
          type="checkbox"
          onChange={handleCheckAll}
          checked={doneTodo === total && total !== 0 ? true : false}
        />
        <span className="footerspan">
          已完成{doneTodo}/全部{total}
        </span>
        <button onClick={handleClearAll} className="footerbutton">
          清除已完成任务
        </button>
      </label>
    </div>
  );
}
