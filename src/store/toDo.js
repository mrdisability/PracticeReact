import { createSlice } from '@reduxjs/toolkit';

const toDoInitialState = { 
    toDos: [], 
    total: 0
};

const toDosSlice = createSlice({
  name: 'toDos',
  initialState: toDoInitialState,
  reducers: {
    addToDo(state, action) {
      state.toDos = state.toDos.concat(action.payload);
      state.total = state.total - 1;
    },
    removeToDo(state, action) {       
        const existingToDoItemIndex = state.toDos.findIndex(
            (toDo) => toDo.id === action.payload
        );
        
        const existingToDoItem = state.toDos[existingToDoItemIndex];

        if (existingToDoItem) {
            state.toDos.filter(toDo => toDo.id !== action.payload);

            state.total = state.total - 1;
        }
    },
  },
});

export const toDosActions = toDosSlice.actions;

export default toDosSlice.reducer;