import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ],
  };

  toggleTodo = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.name}
              <button onClick={() => this.toggleTodo(index)}>
                {todo.completed ? "✔️" : "❌"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
