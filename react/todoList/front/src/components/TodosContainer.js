import React, { Component } from "react";
import axios from "axios";
import TodoElem from "./TodoElem";

class TodosContainer extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("http://localhost:7878/api/todos").then(res => {
      const todos = res.data;
      this.setState({ todos });
    });
  }

  generateTodos = () => {
    const todos = [];
    const entries = this.state.todos.entries();
    for (const [i, item] of entries) {
      todos.push(<TodoElem name={item.name} key={i} />);
    }
    return todos;
  };

  render() {
    return (
      <div className="list-container-wrapper">
        <ul className="todos-list">{this.generateTodos()}</ul>
      </div>
    );
  }
}

export default TodosContainer;
