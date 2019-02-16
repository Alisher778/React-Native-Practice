import { ADD_USER, DELETE_USER } from '../actions/actionTypes';
import { addUser } from '../actions/userActions';

const initialState = {name: 'Hello', users: []};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {
                users: [...state, {name: action.name, id: Date.now()}]
            }
        case DELETE_USER: 
            return {
                users: state.users.filter(user => user.id !== key)
            }
        default: 
            return state;
    }
}

export default reducer;
