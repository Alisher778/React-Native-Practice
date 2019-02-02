import usersReducer from './reducers/usersReducer';

const reducer = () => {
   return {
       users: usersReducer
    }
}

export default reducer;