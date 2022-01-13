import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TodosList from './components/ToDos/todos-list.component';
import AddTodo from './components/ToDos/add-todo.component';

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

        <Routes>
          <Route exact path="/" element={<TodosList />}/>
          <Route exact path="/add_todo" element={<AddTodo />}/>
        </Routes>
      </div>
    </Router>
  );
}

/* <ul>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/practice">Practice</Link>
</li>
</ul> */

/* <hr /> */

/*
A <Switch> looks through all its children <Route>
elements and renders the first one whose path
matches the current URL. Use a <Switch> any time
you have multiple routes, but you want only one
of them to render at a time
*/

//import ExpenseTitleDate from './components/ExpenseTitleDate';

//Component is just a javascript function
// function App() {

//   const expenses = [
//     {
//       id: '1',
//       title: 'Title',
//       amount: 100,
//       date: new Date()
//     },
//     {
//       id: '2',
//       title: 'Title',
//       amount: 100,
//       date: new Date()
//     },
//     {
//       id: '3',
//       title: 'Title',
//       amount: 100,
//       date: new Date()
//     }
//   ]

//   return (
//     <div>
//         <Expenses
//           expenses={expenses}
//         ></Expenses>
//     </div>
//   );
// }

// export default App;
