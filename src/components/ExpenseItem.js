import { Card, Badge } from "react-bootstrap";

//Must have only one root element
//Looks like html but its specific jsx syntax created by react team
function ExpenseItem(props) {
    const expenseDate = new Date();
    const title = "Practice React";
    const price = 100;

    return (
       <div>
           <Card style={{ width: '25rem', background: '#DCDCDC' }}>
            <Card.Body>
                <Card.Title>
                    {props.title} <Badge style={{ float: 'right' }} bg="secondary">{props.date.toISOString()}</Badge>
                </Card.Title>
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