import './Movie.css';

export default function Movie({movie: {title, poster_path}}) {

    let url = 'https://image.tmdb.org/t/p/w300' + poster_path;

    return (
        <div className={'film'}>
            <div className={'img'}>
                <img src={url} alt="film"/>
            </div>
            <div className={'title'}>{title}</div>
        </div>
    );
}