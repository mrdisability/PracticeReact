//Add meal to cart
import { useRef, useState } from "react";

//{} - expression, {{}} - javascript object
const MealItemForm = props => {
    //Control whether form is valid or not
    //State snapshot and state updating function
    const [amountIsValid, setAmountIsValid] = useState(true);

    //To get value from input
    //Get access to input through refs
    const amountInputRef = useRef();

    //Error message using useState

    const submitHandler = event => {
        //Prevent page reload
        event.preventDefault();

        //Value is always a string
        const enteredAmount = amountInputRef.current.value;

        //Converts string to number
        const enteredAmountNumber = +enteredAmount;

        //trim is a function
        if (enteredAmount.trim().length === 0 || 
                enteredAmountNumber < 1 || 
                enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <div>
        <form class="row g-3" onSubmit={submitHandler}>
            <div class="col-auto">
                <label id="amount" class="col-form-label">Amount</label>
            </div>
            <div class="col-auto">
            {/* min="1" max="5" */}
                <input ref={amountInputRef} type="number" step="1"
                    class="form-control" id="amount" defaultValue="1" />
            </div>
            <button class="btn btn-outline-primary col-auto">Add</button>

        </form>
        <br />
        {/* State and condition rendering */}
        {!amountIsValid && <div class="alert alert-danger" role="alert">
                    Please enter a valid amount (1-5).
            </div>}
    </div>
};

export default MealItemForm;

/* <Input class="col-auto" label="Amount" input={{
id: 'amount',
type: 'number',
min: '1',
max: '1',
step: '1',
defaultValue: '1'
}} /> */