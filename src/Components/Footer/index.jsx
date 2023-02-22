import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  handleClearAll = () => {
    this.props.clearAllTodo();
  };
  render() {
    const { todos } = this.props;
    const doneTodo = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="footer">
        <input
          type="checkbox"
          onChange={this.handleCheckAll}
          checked={doneTodo === total && total !== 0 ? true : false}
        />
        <span className="footerspan">
          已完成{doneTodo}/全部{total}
        </span>
        <button onClick={this.handleClearAll} className="footerbutton">
          清除已完成任务
        </button>
      </div>
    );
  }
}
