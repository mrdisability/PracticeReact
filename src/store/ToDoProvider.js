import ToDoContext from "./todo-context";
import { useReducer } from "react";

const defaultToDoState = {
    toDos: [],
    total: 0
};

const toDoReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotal = state.total + 1;
        
        const updatedToDos = state.toDos.concat(action.toDo);;
    
        return {
          toDos: updatedToDos,
          total: updatedTotal,
        };
    }

    if (action.type === 'REMOVE') {
        const existingToDoIndex = state.toDos.findIndex(
          (toDo) => toDo.id === action.id
        );
        const existingToDo = state.toDos[existingToDoIndex];

        let updatedToDos;
        let updatedTotal;
        if (existingToDo) {
          updatedToDos = state.toDos.filter(toDo => toDo.id !== action.id);

          updatedTotal = state.total + 1;
        } 
    
        return {
          toDos: updatedToDos,
          total: updatedTotal
        };
    }

    return defaultToDoState;
};

const ToDoProvider = props => {
    const [toDoState, dispatchToDoAction] = useReducer(toDoReducer, defaultToDoState);

    const addToDoHandler = (toDo) => {
        console.log(toDo);
        dispatchToDoAction({type: 'ADD', toDo: toDo});
    };

    const removeToDoHandler = (id) => {
        dispatchToDoAction({type: 'REMOVE', id: id});
    };

    const toDoContext = {
        toDos: toDoState.toDos,
        total: toDoState.total,
        addToDo: addToDoHandler,
        removeToDo: removeToDoHandler
    };

    return <ToDoContext.Provider value={toDoContext}>
        {props.children}
    </ToDoContext.Provider>
};

export default ToDoProvider;