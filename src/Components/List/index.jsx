import React, { Component } from "react";
import "./index.css";

class Item extends Component{
  state = {
    mouse: false,
  };
  // 鼠标移动变灰
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    return (event) => {
      this.props.deleteTodo(id);
    };
  };
  render() {
    const { id,name,done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}//鼠标移动变灰
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span className="listspan">{name}</span>
          <button
            onClick={this.handleDelete(id)}
            style={{ display: mouse ? "inline-block" : "none" }}
            className="listbutton"
          >
            删除
          </button>
        </label>
      </li>
    )
  }
}
export default class index extends Component {
  
  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <Item key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
            );
          })}
        </ul>
      </div>
    );
  }
}
