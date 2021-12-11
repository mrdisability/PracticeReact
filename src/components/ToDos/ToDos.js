import { useContext, useRef, useState } from "react";
//import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import ToDoContext from "../../store/todo-context"
import { v4 as uuidv4 } from 'uuid';
import ToDoProvider from "../../store/ToDoProvider";
import ToDoForm from "./ToDoForm";

const DUMMY_TODOS = [
    {
        id: 't1',
        toDo: 'First ToDo'
    },
    {
        id: 't2',
        toDo: 'Second ToDo'
    }
];

const ToDos = () => {
    const [toDoIsValid, setToDoIsValid] = useState(true);

    const toDoInputRef = useRef();

    const toDoContext = useContext(ToDoContext);

    const [toDoItems, setToDoItems] = useState(DUMMY_TODOS)

    const toDosList = toDoItems
        .map(toDo => <ToDoItem key={toDo.id} id={toDo.id} toDo={toDo.toDo}></ToDoItem>)

    // const addToDoHandler = toDo => {
    //     const id = uuidv4();

    //     toDoContext.addToDo({
    //         id: id,
    //         toDo: toDo
    //     });
    // };

    const submitHandler = event => {
        event.preventDefault();

        const enteredToDo = toDoInputRef.current.value;

        if (enteredToDo.trim().length === 0) {
            setToDoIsValid(false);
            return;
        }

        setToDoIsValid(true);

        const id = uuidv4();

        const newToDo = {
            id: id,
            toDo: enteredToDo
        };

        console.log(newToDo)

        //Not sure why context is not working but everything looks right
        // toDoContext.addToDo(newToDo);

        setToDoItems(prevState => [...prevState, newToDo])
    };

    //Have to wrap with provider to use context all over website
    return <ToDoProvider>
        <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>ToDos</h1>
                    <ul class="list-group">{toDosList}</ul>

                    {/* <ToDoForm onAddToDo={addToDoHandler} /> */}
                    
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
                <div className="col-md-2"></div>
            </div>
    </ToDoProvider> 
};

export default ToDos;