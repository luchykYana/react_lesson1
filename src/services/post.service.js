const getPosts = () => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
}

const getPostsOfUser = (id) => {

    return fetch('https://jsonplaceholder.typicode.com/user/' + id + '/posts')
        .then(value => value.json());
}

export {getPosts, getPostsOfUser};
