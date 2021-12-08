import { Card, Badge } from "react-bootstrap";
function ExpenseTitleDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
       <div>
            <Card.Title>
                {props.title} 
                <Badge style={{ float: 'right' }} bg="secondary">
                    {month} {day}, {year}
                </Badge>
            </Card.Title>
       </div>
    );
}

export default ExpenseTitleDate;