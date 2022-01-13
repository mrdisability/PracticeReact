import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  //Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";

import TodosList from './components/ToDos/todos-list.component';
import AddTodo from './components/ToDos/add-todo.component';
import Todo from './components/ToDos/todo.component';

export default function App() {
  return (
    <Router>
      <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link className='navbar-brand' to="/">PracticeReact</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to="/add_todo">Add Todo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path={["/", "/todos"]} component={TodosList} />
        <Route exact path="/add_todo" component={AddTodo} />
        <Route path="/todos/:id" component={Todo} />
      </Switch>

        {/* <Routes>
          <Route exact path="/" element={<TodosList />}/>
          <Route exact path="/add_todo" element={<AddTodo />}/> */}
          {/* <Route exact path="/todos/:id" element={<Todo />} /> */}
          {/* <Route path="/todos/:id" render={(props) => <Todo {...props} />}/>  */}
        {/* </Routes> */}
      </div>
    </Router>
  );
}