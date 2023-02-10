import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  state = {
    mouse: false,
  };
  handlemouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handlecheck = (id) => {
    return (event) => {
      this.props.updatetodo(id, event.target.checked);
    };
  };
  handledelete = (id) => {
    return (event) => {
      this.props.deletetodo(id);
    };
  };
  render() {
    const { todos } = this.props;
    const { mouse } = this.state;
    return (
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return (
              <li
                style={{ backgroundColor: mouse ? "grey" : "white" }}
                key={todo.id}
                onMouseEnter={this.handlemouse(true)}
                onMouseLeave={this.handlemouse(false)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={this.handlecheck(todo.id)}
                  />
                  <span className="listspan">{todo.name}</span>
                  <button
                    onClick={this.handledelete(todo.id)}
                    style={{ display: mouse ? "inline-block" : "none" }}
                    className="listbutton"
                  >
                    删除
                  </button>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
