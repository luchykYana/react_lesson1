import './App.css';
import {useEffect} from "react";
import {discoverMovie, getGenres} from "./services/movie.service";
import Movies from "./components/movies/Movies";
import {useDispatch, useSelector} from "react-redux";
import {createPages} from "./func/pages";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {films, currentPage, perPage, totalCount, genres} = state;

    useEffect(() => {
        discoverMovie(currentPage).then(value => dispatch({type: "ADD_FILMS", payload: {films: value.data.results}}));
    }, [dispatch, currentPage])

    // dispatch({type: "ADD_FILMS", payload: value.data.results})

    useEffect(() =>{
        getGenres().then(value => console.log(value));
    },[dispatch]);

    // dispatch({type: "ADD_GENRES", payload: value.data.genres})
    const pages = [ ];
    createPages(pages, currentPage);
    return (
        <div className={'main-page'}>
            <header>

            </header>
            <div>
                <Movies movies={films}/>
            </div>
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage === page ? 'current_page' : 'page'}
                    onClick={() => {
                        dispatch({type: "SET_CURRENT_PAGE", payload:page});
                        window.scrollTo(0,0)}
                    }>{page}</span>)}
            </div>
        </div>
    );
}
