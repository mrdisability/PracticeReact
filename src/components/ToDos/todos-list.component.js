import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveTodos, deleteAllTodos } from "../../actions/todos";
import { Link } from 'react-router-dom';

class TodosList extends Component {
  constructor(props) {
    super(props);
    // this.onChangeSearchCompleted = this.onChangeSearchCompleted.bind(this);
    this.refreshData = this.refreshData.bind(this);
    //this.setActiveTodo = this.setActiveTodo.bind(this);
    //this.findByCompleted = this.findByCompleted.bind(this);
    this.removeAllTodos = this.removeAllTodos.bind(this);

    this.state = {
      currentTodo: null,
      currentIndex: -1,
      //searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTodos();
  }

//   onChangeSearchTitle(e) {
//     const searchTitle = e.target.value;

//     this.setState({
//       searchTitle: searchTitle,
//     });
//   }

  refreshData() {
    this.setState({
      currentTodo: null,
      currentIndex: -1,
    });
  }

  setActiveTodo(todo, index) {
    this.setState({
      currentTodo: todo,
      currentIndex: index,
    });
  }

  removeAllTodos() {
    this.props
      .deleteAllTodos()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

//   findByTitle() {
//     this.refreshData();

//     this.props.findTodosByTitle(this.state.searchTitle);
//   }

  render() {
    const { currentTodo, currentIndex } = this.state;
    const { todos } = this.props;

    return (
        <div className="list row">
          <div className="col-md-8">
            {/* <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchCompleted}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findByTitle}
                >
                  Search
                </button>
              </div>
            </div> */}
          </div>
          <div className="col-md-6">
            <h4>Todos List</h4>
  
            <ul className="list-group">
              {todos &&
                todos.map((todo, index) => (
                  <li 
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTodo(todo, index)}
                    key={index}
                  >
                    {todo.todo}
                  </li>
                ))}
            </ul>
  
            {/* <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllTutorials}
            >
              Remove All
            </button> */}
          </div>
          <div className="col-md-6">
            {currentTodo ? (
              <div>
                <h4>Todo</h4>
                <div>
                  <label>
                    <strong>Todo:</strong>
                  </label>{" "}
                  {currentTodo.todo}
                </div>
                <div>
                  <label>
                    <strong>Completed:</strong>
                  </label>{" "}
                  {currentTodo.completed.toString()}
                </div>

                <Link className='btn btn-danger' to={"/todos/" + currentTodo.id}>Edit</Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a todo...</p>
              </div>
            )}
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { retrieveTodos, deleteAllTodos })(TodosList);