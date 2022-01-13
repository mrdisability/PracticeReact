import {
    CREATE_TODO,
    RETRIEVE_TODOS,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODOS
  } from "./types";
  
  import TodoDataService from "../services/todo.service";
  
  export const createTodo = (todo, completed) => async (dispatch) => {
    try {
      const res = await TodoDataService.create({ todo, completed });
  
      dispatch({
        type: CREATE_TODO,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveTodos = () => async (dispatch) => {
    try {
      const res = await TodoDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TODOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateTodo = (id, data) => async (dispatch) => {
    try {
      const res = await TodoDataService.update(id, data);
  
      dispatch({
        type: UPDATE_TODO,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteTodo = (id) => async (dispatch) => {
    try {
      await TodoDataService.delete(id);
  
      dispatch({
        type: DELETE_TODO,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllTodos = () => async (dispatch) => {
    try {
      const res = await TodoDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_TODOS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findTodosByCompleted = (completed) => async (dispatch) => {
    try {
      const res = await TodoDataService.findByCompleted(completed);
  
      dispatch({
        type: RETRIEVE_TODOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };