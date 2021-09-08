import {colorG} from "../../func/pages";
import './GenreOfFilm.css';

export default function GenreOfFilm({genre}) {

    return (
        <div className={'genreOfFilm'}>
            <div className={colorG(genre)}>{genre}</div>
        </div>
    );
}