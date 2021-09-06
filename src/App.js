import './App.css';
import {getFilmsOfGenres} from "./services/movie.service";
import {useState} from "react";
import {useSelector} from "react-redux";
import MainPage from "./components/main_page/MainPage";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import MovieDetails from "./components/movie_details/MovieDetails";

export default function App() {
    let state = useSelector(state => state);
    let {genres} = state;
    let [filmsOfGenres, setFilmsOfGenres] = useState([]);
    let [i, setI] = useState(null);
    let onSelectGenres = (e) => {
        let idGenre = e.target.value;
        getFilmsOfGenres(idGenre).then(value => setFilmsOfGenres(value.data.results));
        setI(1);
    };

    return (
        <Router>
            <div className={'first'}>
                <header>

                    <div>
                        <select onChange={onSelectGenres}>
                            <option value="" selected disabled hidden>genres</option>
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>

                    <div><Link to={'/main-page'}>Main Page</Link></div>

                </header>

                <Route path={'/main-page'}>
                    <MainPage filmsOfGenres={filmsOfGenres} i={i}/>
                </Route>

                <Route path={'/movie-details'} render={(props) => <MovieDetails {...props}/>}/>

            </div>
        </Router>
    );
}
