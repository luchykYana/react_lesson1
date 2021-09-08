const ADD_FILMS = 'ADD_FILMS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ADD_GENRES = 'ADD_GENRES';

const addFilms = (payload) => {
    return {type: ADD_FILMS, payload}
}

const addGenres = (payload) => {
    return {type: ADD_GENRES, payload}
}

const setCurrentPage = (payload) => {
    return {type: SET_CURRENT_PAGE, payload}
}

export {ADD_FILMS, SET_CURRENT_PAGE, ADD_GENRES, addFilms, addGenres, setCurrentPage};