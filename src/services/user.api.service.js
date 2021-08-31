import {addUser, loadUsers} from "../redux/actions";

const url = 'https://jsonplaceholder.typicode.com/users';

//----------------------------------------------------------------------------------------------------------------------

const fetchGetUsers = () => async (dispatch) => {
    let response = await fetch(url)
        .then(value => value.json());
    dispatch(loadUsers(response));
}

//----------------------------------------------------------------------------------------------------------------------

const fetchAddUser = (user) => async (dispatch) => {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(value => value.json());

    dispatch(addUser(response));
}

//----------------------------------------------------------------------------------------------------------------------

export {fetchGetUsers, fetchAddUser};