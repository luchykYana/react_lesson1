import {LOAD_USERS, ADD_USER, CLEAR_STORE} from "./actions";

//----------------------------------------------------------------------------------------------------------------------

const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload};
}

//----------------------------------------------------------------------------------------------------------------------

const addUser = (payload) => {
    return {type: ADD_USER, payload};
}

//----------------------------------------------------------------------------------------------------------------------

const cleanStore = () => {
    return {type: CLEAR_STORE};
}

//-

export {loadUsers, addUser, cleanStore};