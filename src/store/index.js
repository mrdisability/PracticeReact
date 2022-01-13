import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { configureStore } from '@reduxjs/toolkit';

// import uiSlice from './ui-slice';

// import toDoSlice from './todo-slice';

// const store = configureStore({
//   reducer: { ui: uiSlice.reducer, toDos: toDoSlice.reducer  },
// });

// export default store;
