import GenreOfFilm from "../genreOfFilm/GenreOfFilm";
import './GenresOfFilm.css';

export default function GenresOfFilm({genres}) {
    return (
        <div className={'genresOfFilm'}>
            <span className={'red'}>Genres:</span> {genres.map(genre => <GenreOfFilm genre={genre}/>)}
        </div>
    );
}