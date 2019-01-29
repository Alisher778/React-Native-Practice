const initialState = {users: [{name: 'Man', email: 'man@gmail.com'}]};

const users = (state=initialState, action) => {
   switch(action.type) {
       case 'ADD_USER': 
         return {users: [...state, action.data]}
       default:
         return state
   }
}

export default users;
