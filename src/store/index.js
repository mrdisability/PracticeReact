import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';

import toDoSlice from './todo-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, toDos: toDoSlice.reducer  },
});

export default store;
