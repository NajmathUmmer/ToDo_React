import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", toDo: [], visiblityFilter: "All" };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleClick(e) {
    const task = {
      completed: false,
      text: this.state.text
    };
    this.setState({
      toDo: [...this.state.toDo, task],
      text: ""
    });
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSelect(e) {
    this.setState({
      visiblityFilter: e.target.value
    });
  }
  handleCheck(e) {
    let tasks = this.state.toDo.map(task => {
      if (task.text === e.currentTarget.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({
      toDo: [...tasks]
    });
  }

  render() {
    let { toDo } = this.state;
    var tasks = toDo;
    switch (this.state.visiblityFilter) {
      case "Completed": {
        tasks = toDo.filter(task => task.completed);
        break;
      }
      case "Pending": {
        tasks = toDo.filter(task => !task.completed);
        break;
      }
      default: {
        break;
      }
    }

    const listTasks = tasks.map((task, index) => (
      <li key={index}>
        {task.text}
        <input
          id={task.text}
          type="checkbox"
          onChange={this.handleCheck}
          checked={task.completed}
        />
      </li>
    ));

    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add</button>
        </form>
        <select value={this.state.visiblityFilter} onChange={this.handleSelect}>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="All">All</option>
        </select>
        <ul>{listTasks}</ul>
      </div>
    );
  }
}

export default App;
