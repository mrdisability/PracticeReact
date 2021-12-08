import './App.css';
import Expenses from './components/Expenses';
import ExpenseTitleDate from './components/ExpenseTitleDate';

//Component is just a javascript function
function App() {

  const expenses = [
    {
      id: '1',
      title: 'Title',
      amount: 100,
      date: new Date()
    },
    {
      id: '2',
      title: 'Title',
      amount: 100,
      date: new Date()
    },
    {
      id: '3',
      title: 'Title',
      amount: 100,
      date: new Date()
    }
  ]

  return (
    <div>
        <Expenses
          expenses={expenses}
        ></Expenses>
    </div>
  );
}

export default App;
