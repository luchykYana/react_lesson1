import './MovieDetails.css';
import {url} from "../../services/movie.service";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import GenresOfFilm from "../genresOfFilm/GenresOfFilm";
import { FaStar } from "react-icons/fa";

export default function MovieDetails({location: {state: {title, poster_path, backdrop_path, release_date, overview, original_title, genre_ids, original_language, vote_average, vote_count}}}) {

    let {genres} = useSelector(state => state);
    let [genresOfFilm, setGenresOfFilm] = useState([]);
    let img = url + 'w500' + poster_path;
    let img2 = url + 'w500'+ backdrop_path;

    useEffect(() => {
        setGenresOfFilm(genre_ids.map(id => {
            let name;
            genres.map(item => {
                if(item.id === id){
                    name = item.name;
                }
                return item;
            })
            return name;
        }))
    }, [genres, genre_ids])


    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (
        <div className={'movie-details'}>
            <div className={'short-info'}>
                <div className={'left'}>
                    <h2>{title} ({release_date.slice(0, 4)})</h2>
                    <img src={img} alt="film"/>
                </div>
                <div className={'right'}>
                    <div><span className={'red'}>Original title:</span> {original_title}</div>
                    <GenresOfFilm genres={genresOfFilm}/>
                    <div><span className={'red'}>Original language:</span> {original_language}</div>
                    <div><span className={'red'}>Year:</span> {release_date.slice(0, 4)}</div>
                    <div><span className={'red'}>Premiere:</span> {release_date}</div>
                    <div><span className={'red'}>Give your rating:</span></div>
                    <div className={'container'}>
                        <div className={'stars'}>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer"
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className={'rate'}>
                    <div><span className={'red'}>Overall score:</span> {vote_average}</div>
                    <div><span className={'red'}>Voted people:</span> {vote_count}</div>
                    </div>
                    <p>{overview}</p>
                    <div><span className={'red'}>Another poster:</span></div>
                    <img src={img2} alt="film"/>
                </div>
            </div>
        </div>
    );
}

const colors = {
    orange: "goldenrod",
    grey: "white"

};

// "#C3073F"
// const colors = {
// grey: "#a9a9a9"
// orange: "#FFBA5A",
// };