import { Provider } from 'react-redux';
import store from '../../store/index';
import TodosList from './todos-list.component'

const ToDos = () => {

    return <Provider store={store}>
        <TodosList />
    </Provider>
};

export default ToDos;