import { useRef, useState } from "react";
//import { v4 as uuidv4 } from 'uuid';

const ToDoForm = props => {
    const [toDoIsValid, setToDoIsValid] = useState(true);

    const toDoInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredToDo = toDoInputRef.current.value;

        if (enteredToDo.trim().length === 0) {
            setToDoIsValid(false);
            return;
        }

        setToDoIsValid(true);

        // const id = uuidv4();

        // const newToDo = {
        //     id: id,
        //     toDo: enteredToDo
        // };

        //console.log(newToDo)

        props.onAddToDo(enteredToDo);
    };

    return <div>
        <form style={{marginTop: '20px'}} class="row g-2" onSubmit={submitHandler}>
        <div className="col-auto col-md-8">
        <input ref={toDoInputRef} type="text"
            class="form-control" id="amount" placeholder="Enter ToDo" />
        </div>
            <button class="btn btn-outline-primary col-auto">Add</button>
        </form>
        {!toDoIsValid&& <div class="alert alert-danger" role="alert">
                Please enter a todo.
        </div>}
    </div>
};

export default ToDoForm;