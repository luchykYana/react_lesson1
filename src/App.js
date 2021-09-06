import './App.css';
import {useEffect, useState} from "react";
import {discoverG, discoverMovie, getFilmsOfGenres, getGenres} from "./services/movie.service";
import Movies from "./components/movies/Movies";
import {useDispatch, useSelector} from "react-redux";
import {createPages} from "./func/pages";
import {Route, Router} from "react-router-dom";
import MovieDetails from "./components/movie_details/MovieDetails";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {films, currentPage, genres} = state;
    let [i, setI] = useState(null);
    let [filmsOfGenres, setFilmsOfGenres] = useState([]);

    useEffect(() => {
        discoverMovie(currentPage).then(value => dispatch({type: "ADD_FILMS", payload: {films: value.data.results}}));
    }, [dispatch, currentPage])


    useEffect(() => {
        getGenres().then(value => dispatch({type: "ADD_GENRES", payload: {genres: value.data.genres}}));
    }, [dispatch]);


    const pages = [];
    createPages(pages, currentPage);
    let onSelectGenres = (e) => {
        let idGenre = e.target.value;
        getFilmsOfGenres(idGenre).then(value => setFilmsOfGenres(value.data.results));
        setI(1);
    };
    return (
            <div className={'main-page'}>
                <header>
                    <div>
                        <select onChange={onSelectGenres}>
                            <option value="" selected disabled hidden>genres</option>
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>
                </header>

                {
                    !i && <Movies movies={films}/>
                }
                {
                    i && <Movies movies={filmsOfGenres}/>
                }

                <div className="pages">
                    {pages.map((page, index) => <span
                        key={index}
                        className={currentPage === page ? 'current_page' : 'page'}
                        onClick={() => {
                            dispatch({type: "SET_CURRENT_PAGE", payload: page});
                            window.scrollTo(0, 0)
                        }
                        }>{page}</span>)}
                </div>
            </div>
    );
}
