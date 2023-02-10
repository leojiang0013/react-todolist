import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class index extends Component {
  handlekeyup = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("ERROR");
      return;
    }
    const newobj = { id: nanoid(), name: target.value, done: false };
    this.props.addtodo(newobj);
    target.value = "";
  };
  render() {
    return (
      <div className="header">
        <input
          onKeyUp={this.handlekeyup}
          className="headerinput"
          type="text"
          placeholder="输入内容"
        />
      </div>
    );
  }
}
