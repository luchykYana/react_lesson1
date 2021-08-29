const url = 'https://jsonplaceholder.typicode.com/users'

//----------------------------------------------------------------------------------------------------------------------

const getUsers = () => {
    return fetch(url)
        .then(value => value.json());
}

//----------------------------------------------------------------------------------------------------------------------

const addUser = (user) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(value => value.json());
}

//----------------------------------------------------------------------------------------------------------------------

export {getUsers, addUser};