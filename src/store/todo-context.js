import { createContext } from "react";

const ToDoContext = createContext({
    toDos: [],
    total: 0,
    addToDo: (toDo) => {},
    removeToDo: (id) => {}
});

export default ToDoContext;

// const toDoContext = {
//     toDos: toDoState.toDos,
//     total: toDoState.total,
//     addToDo: addToDoHandler,
//     removeToDo: removeToDoHandler
// };