// import { useContext } from "react";
// import ToDoItemForm from "./ToDoItemForm";
// import ToDoContext from "../../store/todo-context"

const ToDoItem = props => {

    // const toDoContext = useContext(ToDoContext);

    // const addToDoHandler = amount => {
    //     toDoContext.addItem({
    //         id: props.id,
    //         toDo: props.toDo
    //     });
    // };

    return <li class="list-group-item">
        {props.toDo}
    </li>
};

export default ToDoItem;