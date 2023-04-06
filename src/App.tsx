import React, { useState } from 'react';
import "./App.css";
import Header from './Components_ts/Header';
import List from './Components_ts/List';
import Footer from './Components_ts/Footer';

export interface Todos{
    id: string;
    name: string;
    done: boolean;
}

export default function App() {
    const [todos, setTodos] = useState<Todos[]>([
        { id: '1', name: "eat", done: true },
        { id: '2', name: "play", done: false },
        { id: '3', name: "shop", done: false },
    ]);
    //添加todo
    const addTodo = (todo:Todos) => {
        setTodos([todo, ...todos]);
    };
    //更新是否选中的状态
    const updateTodo = (id:string, done:boolean) => {
        const newtodos = todos.map((todo) => {
            if (todo.id === id) return { ...todo, done };
            else return todo;
        });
        setTodos(newtodos);
    };
    //删除todo
    const deleteTodo = (id:string) => {
        const newtodos = todos.filter((todo) => todo.id !== id);
        setTodos(newtodos);
    };
    //全选todo
    const checkAllTodo = (done:boolean) => {
        const newtodos = todos.map((todo) => {
            return { ...todo, done };
        });
        setTodos(newtodos);
    };
    //清除已完成任务
    const clearAllTodo = () => {
        const newtodos = todos.filter((todo) => !todo.done);
        setTodos(newtodos);
    };
    return (
        <div className="App">
            <div className="container">
                <Header addTodo={addTodo} />
                <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                <Footer
                    todos={todos}
                    checkAllTodo={checkAllTodo}
                    clearAllTodo={clearAllTodo}
                />
            </div>
        </div>
    )
}
