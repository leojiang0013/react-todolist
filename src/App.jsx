import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "eat", done: true },
      { id: 2, name: "play", done: false },
      { id: 3, name: "shop", done: false },
    ],
  };
  addtodo = (todoobj) => {
    const { todos } = this.state;
    const newobj = [todoobj, ...todos];
    this.setState({ todos: newobj });
  };
  updatetodo = (id, done) => {
    const { todos } = this.state;
    const newobj = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else return todo;
    });
    this.setState({ todos: newobj });
  };
  deletetodo = (id) => {
    const { todos } = this.state;
    const newobj = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newobj });
  };
  checkalltodo = (done) => {
    const { todos } = this.state;
    const newobj = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newobj });
  };
  clearalltodo = () => {
    const { todos } = this.state;
    const newobj = todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos: newobj });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header addtodo={this.addtodo} />
          <List
            todos={todos}
            updatetodo={this.updatetodo}
            deletetodo={this.deletetodo}
          />
          <Footer
            todos={todos}
            checkalltodo={this.checkalltodo}
            clearalltodo={this.clearalltodo}
          />
        </div>
      </div>
    );
  }
}
