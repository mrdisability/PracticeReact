import React, { useState } from "react";

import { Card, Badge, Button } from "react-bootstrap";
import ExpenseTitleDate from "./ExpenseTitleDate";
//import MyCard from "./MyCard"

//Must have only one root element
//Looks like html but its specific jsx syntax created by react team
//Always remember ;, this aint Kotlin
//Function that returns jsx
function ExpenseItem(props) {

    //Need a way to tell react that something has changed
    //React doesnt care about these normal variables
    let title = props.title;
    
    function clickHandler() {
        console.log("Button clicked!")

        title = "Samoa";
    }

    //Remember to use {} Angular is {{}}
    //width: '25rem'
    return (
       <div>
            <Card style={{ background: '#DCDCDC' }}>
                <Card.Body>
                    <ExpenseTitleDate
                        date={props.date}
                        title={title}
                    ></ExpenseTitleDate>
                    <Card.Text>
                        ${props.amount}
                    </Card.Text>
                    <Button onClick={clickHandler} variant="primary">Change Title</Button>
                </Card.Body>
            </Card>
       </div>
    );
}

//Export to use outside of this file
export default ExpenseItem;

//Point at click handler because it would be tool early when compiling jsx

/* <Card.Title>
    {props.title} 
    <Badge style={{ float: 'right' }} bg="secondary">
        {month} {day}, {year}
    </Badge>
</Card.Title> */

// const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();