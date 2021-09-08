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
    let [j, setJ] = useState(null);
    let [z, setZ] = useState(null);

    let onSelectGenres = (e) => {
        let idGenre = e.target.value;
        getFilmsOfGenres(idGenre).then(value => setFilmsOfGenres(value.data.results));
        setI(1);
    };

    let onChangeTheme = () => {
        setZ(1);
        let first = document.getElementsByClassName('first')[0];
        let header = document.getElementsByTagName('header')[0];
        let select = document.getElementsByTagName('select')[0];
        let name = document.getElementsByClassName('name')[0];
        let switchB = document.getElementsByClassName('switch')[0];
        first.style.background = '#1A1A1D';
        header.style.background = '#C3073F';
        select.style.background = '#C3073F';
        name.style.background = 'white';
        name.style.color = '#1A1A1D';
        switchB.style.background = '#1A1A1D';
    };

    return (
        <Router>
            <div className={'first'}>
                <header>
                    <div><Link to={'/'}>Home page</Link></div>
                    <div><Link to={'/main-page'} onClick={onclick = () => {
                        setJ(1)
                    }}>Main page</Link></div>
                    <div>
                        <select onChange={onSelectGenres}>
                            <option value="" selected disabled hidden>Genres</option>
                            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                        </select>
                    </div>

                    <button onClick={onChangeTheme} className={'switch'}>Black</button>

                    <div className={'person'}>
                        <div className={'circle'}></div>
                        <input className={'name'} placeholder={'Name'}></input>
                    </div>

                </header>
                {!j && <div className={'instruction'}>
                    <ul>
                        <li>Click on "name" on the top right and write down your own name.</li>
                        <li>Click on "Main page" to view the full list of movies.</li>
                        <li>Click on "Genres" to select only movies that have the specified genre.</li>
                        <li>Click on a movie card to get detailed information about it.</li>
                    </ul>
                </div>}

                <Route path={'/main-page'}>
                    <MainPage filmsOfGenres={filmsOfGenres} i={i} onChangeTheme={onChangeTheme} z={z}/>
                </Route>

                <Route path={'/movie-details'} render={(props) => <MovieDetails {...props}/>}/>

            </div>
        </Router>
    );
}

