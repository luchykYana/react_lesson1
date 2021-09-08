import {ADD_FILMS, ADD_GENRES, SET_CURRENT_PAGE} from "../actions";

const initialState = {
    films: [],
    genres:[],
    isFetching: true,
    currentPage: 1,
    perPage: 20,
    totalCount: 10000
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILMS:
            return {...state, films: action.payload.films, totalCount: action.payload.totalCount, isFetching: false};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case ADD_GENRES:
            return {...state, genres: action.payload.genres};
        default:
            return state;
    }
}