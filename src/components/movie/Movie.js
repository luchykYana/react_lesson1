import './Movie.css';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import {useHistory} from "react-router";


export default function Movie({movie}) {

    let url = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    let history = useHistory();
    const navigator = () => {
        history.push(
            '/movie-details', movie
        );
    };

    return (
        <Router>
            <div className={'film'}>
                <button onClick={navigator}>
                    <Link to={{pathname: '/movie-details', state: movie}}>
                        <div className={'img'}>
                            <img src={url} alt="film"/>
                        </div>
                        <div className={'title'}>{movie.title}</div>
                    </Link>
                </button>
            </div>
        </Router>
    );
}