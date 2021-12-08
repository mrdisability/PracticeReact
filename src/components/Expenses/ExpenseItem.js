import { Card, Badge } from "react-bootstrap";
import ExpenseTitleDate from "./ExpenseTitleDate";
//import MyCard from "./MyCard"

//Must have only one root element
//Looks like html but its specific jsx syntax created by react team
//Always remember ;, this aint Kotlin
function ExpenseItem(props) {
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();

    //Remember to use {} Angular is {{}}
    //width: '25rem'
    return (
       <div>
           <Card style={{ background: '#DCDCDC' }}>
            <Card.Body>
                <ExpenseTitleDate
                    date={props.date}
                    title={props.title}
                ></ExpenseTitleDate>
                <Card.Text>
                   ${props.amount}
                </Card.Text>
            </Card.Body>
            </Card>
       </div>
    );
}

//Export to use outside of this file
export default ExpenseItem;

/* <Card.Title>
    {props.title} 
    <Badge style={{ float: 'right' }} bg="secondary">
        {month} {day}, {year}
    </Badge>
</Card.Title> */