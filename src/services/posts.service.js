const url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = () => {

    return fetch(url)
        .then(value => value.json());
}

const getCommentsOfPost = (id) => {

    return fetch(url + '/' + id + '/comments')
        .then(value => value.json());
}


export {getPosts, getCommentsOfPost};