import {ADD_USER, CLEAR_STORE, LOAD_USERS} from "../actions";

let initialState = {users:[]};

export const reducerUser = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USERS:
            let usersItems = action.payload;
            return {...state, users: [...usersItems]};
        case ADD_USER:
            let newUser = action.payload;
            let newArray = [...state.users, newUser];
            return {...state, users: [...newArray]};
        case CLEAR_STORE:
            return {...state, users: []};
        default:
            return state;
    }
}