import { Fragment, useEffect } from 'react';
//import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../../components/UI/Notification';
import { fetchToDoData } from '../../store/todo-actions';

//let isInitial = true;

function ReduxTodos() {
  const dispatch = useDispatch();
  
  const notification = useSelector((state) => state.ui.notification);

  const toDos = useSelector((state) => state.toDos.toDos);

  useEffect(() => {
    dispatch(fetchToDoData());
  }, [dispatch]);

    // Object.keys(toDos).map(function(key, index) {
    //     console.log(toDos[key])
    // });

  return (
    <Fragment>
        {notification && (
            <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
            />
        )}

        <ul className='list-group'>
            {Object.keys(toDos).map((key, index) => (
                <li className="list-group-item" key={key}>
                    {toDos[key].todo}
                </li>
            ))}  
        </ul>
       
        {/* <ul className='list-group'>
            {toDos.map((toDo) => (
                <li class="list-group-item">
                    {toDo}
                </li>
            ))}  
        </ul> */}
        
        {/* {console.log(arr)} */}
    </Fragment>
  );
}

//{this.props.data && (this.props.data).map(e => /* render data */)}

export default ReduxTodos;