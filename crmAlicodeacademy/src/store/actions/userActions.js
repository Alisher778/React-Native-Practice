import { ADD_USER, DELETE_USER } from './actionTypes';

export const addUser = (name) => {
    return {
        type: ADD_USER,
        name: name
    }
}  

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id: id
    }
}

