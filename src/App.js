import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";

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
      visiblityFilter: e.currentTarget.id
    });
    e.preventDefault();
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
      <li class="list-group-item" key={index}>
        <div className="row">
          <div className="col-9">{task.text}</div>
          <div className="col-3">
            <input
              id={task.text}
              type="checkbox"
              onChange={this.handleCheck}
              checked={task.completed}
            />
          </div>
        </div>
      </li>
    ));

    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <nav className="nav flex-column sideNav nav-pills">
                <a
                  className="nav-link active"
                  id="All"
                  href=""
                  onClick={this.handleSelect}
                  data-toggle="pill"
                >
                  All
                </a>
                <a
                  className="nav-link"
                  id="Completed"
                  href=""
                  onClick={this.handleSelect}
                  data-toggle="pill"
                >
                  Completed
                </a>
                <a
                  className="nav-link"
                  id="Pending"
                  href=""
                  onClick={this.handleSelect}
                  data-toggle="pill"
                >
                  Pending
                </a>
              </nav>
            </div>
            <div className="col-8">
              <form onSubmit={this.handleClick}>
                <input
                  type="text"
                  value={this.state.text}
                  className="form-control textField"
                  onChange={this.handleChange}
                />
              </form>

              <ul className="textField list-group">{listTasks}</ul>
            </div>
            <div className="col-1">
              <button className="btn btn-primary textField">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
