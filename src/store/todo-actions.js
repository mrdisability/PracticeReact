import { uiActions } from './ui-slice';
import { toDoActions } from './todo-slice';

export const fetchToDoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://practicereact-7a9bd-default-rtdb.firebaseio.com/toDos.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch ToDo data!');
      }

      const data = await response.json();

      //console.log(data);

      return data;
    };

    try {
      const toDoData = await fetchData();

      //console.log(toDoData);

      dispatch(
        toDoActions.replaceToDos({
          toDos: toDoData || []
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching toDo data failed!',
        })
      );
    }
  };
};

export const sendToDoData = (toDo) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending toDo data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://practicereact-7a9bd-default-rtdb.firebaseio.com/toDos.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            toDos: toDo.toDos,
            total: toDo.total,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending toDo data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent toDo data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending toDo data failed!',
        })
      );
    }
  };
};
