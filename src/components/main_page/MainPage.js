import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie, getGenres} from "../../services/movie.service";
import {createPages} from "../../func/pages";
import Movies from "../movies/Movies";
import {addFilms, addGenres, setCurrentPage} from "../../redux/actions";

export default function MainPage({filmsOfGenres, i, onChangeTheme, z}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {films, currentPage} = state;

    useEffect(() => {
        if(z){
            onChangeTheme();
            let main_page = document.getElementsByClassName('main-page')[0];
            let films = document.getElementsByClassName('films')[0];
            main_page.style.background = '#1A1A1D';
            films.style.background = '#C3073F';
        }
    })

    useEffect(() => {
        discoverMovie(currentPage).then(value => dispatch(addFilms({films: value.data.results})));
    }, [dispatch, currentPage])


    useEffect(() => {
        getGenres().then(value => dispatch(addGenres({genres: value.data.genres})));
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
                        dispatch(setCurrentPage(page));
                        window.scrollTo(0, 0)
                    }
                    }>{page}</span>)}
            </div>
        </div>
    );
}