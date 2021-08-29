import {CLEAR_STORE, FETCH_USERS, PUSH_USER} from "../actions";

const initialState = {users: []};

export const reducerUser = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS:
            return {...state, users: [...action.payload]};
        case PUSH_USER:
            return {...state, users: [...state.users, action.payload]};
        case CLEAR_STORE:
            return {...state, users: []};
        default:
            return state;
    }
}