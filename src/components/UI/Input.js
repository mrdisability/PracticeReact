import React from "react";

//To add ref from parent to child with input
const Input = React.forwardRef((props, ref) => {
    return <div>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input} />
    </div>
});

export default Input;

 /* <label htmlFor={props.input.id}>{props.label}</label> */
/* {...props.input} makes input configurable from outside of component 
Whether it be type text or number etc getting all the input properties */
/* <input id={props.input.id} {...props.input} /> */