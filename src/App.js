import React, { Component } from "react";
import Item from "./Item";
import "./style.css";
import todolistData from "./todolistData";
class App extends Component {
  constructor() {
    super();
    this.state = { todos: todolistData };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completion = !todo.completion;
        }
        return todo;
      });

      return {
        todos: updatedTodos,
      };
    });
    console.log("changed", id);
  }

  render() {
    const todoComponent = this.state.todos.map((object) => (
      <Item key={object.id} object={object} handleChange={this.handleChange} />
    ));
    return <div className="list">{todoComponent}</div>;
  }
}

export default App;
