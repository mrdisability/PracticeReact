import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
    </div>
  );
}

export default App;
