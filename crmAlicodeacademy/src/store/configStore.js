import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
    users: userReducer
});

const configStore = () => {
    return createStore(rootReducer);
}

export default configStore;