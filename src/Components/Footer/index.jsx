import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  handlecheckall = (event) => {
    this.props.checkalltodo(event.target.checked);
  };
  handleclearall = () => {
    this.props.clearalltodo();
  };
  render() {
    const { todos } = this.props;
    const donetodo = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="footer">
        <input
          type="checkbox"
          onChange={this.handlecheckall}
          checked={donetodo === total && total !== 0 ? true : false}
        />
        <span className="footerspan">
          已完成{donetodo}/全部{total}
        </span>
        <button onClick={this.handleclearall} className="footerbutton">
          清除已完成任务
        </button>
      </div>
    );
  }
}
