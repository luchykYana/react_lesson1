import './Movie.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import MovieDetails from "../movie_details/MovieDetails";

export default function Movie({movie}) {

    let url = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

    return (
        <Router>
            <div className={'film'}>
                <Link to={'/movie-details'}>
                    <div className={'img'}>
                        <img src={url} alt="film"/>
                    </div>
                    <div className={'title'}>{movie.title}</div>
                </Link>
            </div>
            <Route path={'/movie-details'}>
                <MovieDetails/>
            </Route>
        </Router>
    );
}