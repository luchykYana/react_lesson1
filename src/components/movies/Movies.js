import Movie from "../movie/Movie";
import './Movies.css';
export default function Movies({movies}) {
    return (
        <div className={'films'}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}