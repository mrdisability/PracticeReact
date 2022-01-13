import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../actions/todos";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.newTodo = this.newTodo.bind(this);

    this.state = {
      id: null,
      todo: "",
      completed: false,

      submitted: false,
    };
  }

  onChangeTodo(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  onChangeCompleted(e) {
    this.setState({
      completed: e.target.checked,
    });
  }

  saveTodo() {
    const { todo, completed } = this.state;

    this.props
      .createTodo(todo, completed)
      .then((data) => {
        this.setState({
          id: data.id,
          todo: data.todo,
          completed: data.completed,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTodo() {
    this.setState({
      id: null,
      todo: "",
      completed: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="container-fluid submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTodo}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="todo">Todo</label>
              <input
                type="text"
                className="form-control"
                id="todo"
                required
                value={this.state.todo}
                onChange={this.onChangeTodo}
                name="todo"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="completed">Completed</label> */}
              <div class="form-check">
              <input class="form-check-input" 
                type="checkbox" 
                id="completed"
                required
                value={this.state.completed}
                onChange={this.onChangeCompleted}
                name="completed"/>
              <label className="form-check-label" htmlFor="completed">
                Completed
              </label>
            </div>
              {/* <input
                type="text"
                className="form-control"
                id="completed"
                required
                value={this.state.completed}
                onChange={this.onChangeCompleted}
                name="completed"
              /> */}
            </div>

            <button onClick={this.saveTodo} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTodo })(AddTodo);