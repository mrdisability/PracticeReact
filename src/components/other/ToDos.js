import { Provider } from 'react-redux';
import store from '../../store/index';
import TodosList from './todos-list.component'

const ToDos = () => {

    return <Provider store={store}>
        <TodosList />
    </Provider>
};

export default ToDos;

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
