import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../../actions/todos";
import TodoDataService from "../../services/todo.service";
//import { useParams } from "react-router-dom";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    //console.log(props);

    this.state = {
      currentTodo: {
        id: null,
        todo: "",
        completed: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTodo(this.props.match.params.id);
  }

  onChangeTodo(e) {
    const todo = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTodo: {
          ...prevState.currentTodo,
          todo: todo,
        },
      };
    });
  }

  onChangeCompleted(e) {
    const completed = e.target.checked;

    this.setState((prevState) => ({
      currentTodo: {
        ...prevState.currentTodo,
        completed: completed,
      },
    }));
  }

  getTodo(id) {
    TodoDataService.get(id)
      .then((response) => {
        this.setState({
          currentTodo: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentTodo.id,
      todo: this.state.currentTodo.todo,
      completed: this.state.currentTodo.completed,
    };

    this.props
      .updateTodo(this.state.currentTodo.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentTodo: {
            ...prevState.currentTodo,
          },
        }));

        this.setState({ message: "Updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateTodo(this.state.currentTodo.id, this.state.currentTodo)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The todo was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTodo() {
    this.props
      .deleteTodo(this.state.currentTodo.id)
      .then(() => {
        this.props.history.push("/todos");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTodo } = this.state;

    return (
      <div className="container-fluid">
        {currentTodo ? (
          <div className="edit-form">
            <h4>Todo</h4>
            <form>
              <div className="form-group">
                <label htmlFor="Todo">Todo</label>
                <input
                  type="text"
                  className="form-control"
                  id="Todo"
                  value={currentTodo.todo}
                  onChange={this.onChangeTodo}
                />
              </div>
              <div className="form-group">
              {/* <label htmlFor="completed">Completed</label> */}
              <div class="form-check">
              <input class="form-check-input" 
                type="checkbox" 
                id="completed"
                required
                checked={currentTodo.completed}
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
              {/* <div className="form-group">
                <label htmlFor="completed">Completed</label>
                <input
                  type="text"
                  className="form-control"
                  id="Completed"
                  value={currentTodo.completed}
                  onChange={this.onChangeCompleted}
                />
              </div> */}

              {/* <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTodo.published ? "Published" : "Pending"}
              </div> */}
            </form>

            {/* {currentTodo.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )} */}

            <button
              className="btn btn-danger"
              onClick={this.removeTodo}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Todo...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo);