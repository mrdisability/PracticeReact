import { useContext, useRef, useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoContext from "../../store/todo-context"
import ToDoProvider from "../../store/ToDoProvider";
import { v4 as uuidv4 } from 'uuid';
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
    const toDoContext = useContext(ToDoContext);

    const [toDoItems, setToDoItems] = useState(DUMMY_TODOS)

    const toDosList = toDoItems
        .map(toDo => <ToDoItem key={toDo.id} id={toDo.id} toDo={toDo.toDo}></ToDoItem>)

    const onAddToDoHandler = toDo => {
        const id = uuidv4();

        const newToDo = {
            id: id,
            toDo: toDo
        };

        // console.log(toDoContext);

        // toDoContext.addToDo({
        //     id: id,
        //     toDo: toDo
        // });

        setToDoItems(prevState => [...prevState, newToDo])
    };

    return <ToDoProvider>
        <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1>ToDos</h1>
                    <ul class="list-group">{toDosList}</ul>

                    <ToDoForm  onAddToDo={onAddToDoHandler}/>

                </div>
                <div className="col-md-2"></div>
            </div>
    </ToDoProvider> 
};

export default ToDos;