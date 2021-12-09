import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

//React is all about components
//Html, jsx and css
function Expenses(props) {
  //props is to send through data to other components  
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
       <div className="container-fluid">
         <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>
              Expenses
            </h1>
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
          <div className="col-md-2"></div>
         </div>
       </div>
    );
}

export default Expenses;

{/* <ExpenseItem
title={props.expenses[0].title}
amount={props.expenses[0].amount}
date={props.expenses[0].date}
></ExpenseItem> */}