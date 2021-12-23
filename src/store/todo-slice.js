import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDos',
  initialState: {
    toDos: [],
    changed: false,
  },
  reducers: {
    replaceToDos(state, action) {
      state.toDos = action.payload.toDos;
    },
    addToDo(state, action) {
      const newToDo = action.payload;
      state.total++;
      state.changed = true;

        state.toDos.push({
            id: newToDo.id,
            toDo: newToDo.toDo,
        });
    },
    removeItemFromtoDo(state, action) {
      const id = action.payload;
      const existingToDo = state.toDos.find((toDo) => toDo.id === id);
      state.total--;
      state.changed = true;
      if (existingToDo) {
        state.toDos = state.toDos.filter((toDo) => toDo.id !== id);
      }
    },
  },
});

export const toDoActions = toDoSlice.actions;

export default toDoSlice;