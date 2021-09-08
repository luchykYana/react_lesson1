import axios from "axios";

const url = 'https://image.tmdb.org/t/p/';

let instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTYxYWFjYjFkMGU4NmI5ODVlMWJhN2I4ZWQ0NDBmYSIsInN1YiI6IjYxMzI4ZWRlMmNkZTk4MDA2MmQwZDllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tcx1nliQ_tQWkCtY5TSS5wqKtel_Rv5zJsy0c6wo9zY"
    }
})

const discoverMovie = async (currentPage) => await instance('discover/movie?&page=' + currentPage);
const getFilmsOfGenres = async (genre) => await instance('discover/movie?&with_genres=' + genre);
const getGenres = async () => await instance('genre/movie/list');

export {discoverMovie, getGenres, getFilmsOfGenres, url};