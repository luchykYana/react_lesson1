import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie, getGenres} from "../../services/movie.service";
import {createPages} from "../../func/pages";
import Movies from "../movies/Movies";

export default function MainPage({filmsOfGenres, i}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {films, currentPage} = state;

    useEffect(() => {
        discoverMovie(currentPage).then(value => dispatch({type: "ADD_FILMS", payload: {films: value.data.results}}));
    }, [dispatch, currentPage])


    useEffect(() => {
        getGenres().then(value => dispatch({type: "ADD_GENRES", payload: {genres: value.data.genres}}));
    }, [dispatch]);


    const pages = [];
    createPages(pages, currentPage);
    return (
        <div className={'main-page'}>
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