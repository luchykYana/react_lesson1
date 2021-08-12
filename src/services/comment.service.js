const getComments = () => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
}

const getCommentsOfUser = (id) => {

    return fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(value => value.json());
}

export {getComments, getCommentsOfUser};