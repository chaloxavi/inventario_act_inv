import React, {useEffect} from 'react';
import '../styles/MovieInfo.css';
import YouTube from "react-youtube";
import {Link} from "react-router-dom";

export const MovieInfo = ({movie, addMovieToRentMovies, rentMovies}) => {


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        console.log(rentMovies);
        document.title = `Carrito: ${rentMovies.length} películas`;
    }, [rentMovies]);

    return (
        <div className='image-container'>
            <div className="video-container">
                <YouTube className="video" videoId={movie.youtubeId} opts={opts} onReady={(event) => {
                    event.target.pauseVideo();
                }}/>

            </div>
            <div className='image-info'>
                <p className='title-movie'>Titulo: {movie.name}</p>
                <p className='director-movie'>Director: {movie.director}</p>
                <p className='year-movie'>Publicacion: {movie.publication}</p>
                <p className='synopsis-movie'>Descripcion: {movie.sinopsis}</p>
                <p className='critic-movie'>Calificacion: {movie.critics}</p>
                <p className='duration-movie'>Duracion:{movie.duration}</p>
                <div className='button-container'>
                    <Link to={`/Principal`}>
                        <button>Regresar a Pantalla Principal</button>
                    </Link>
                    <button onClick={(event) => {
                        addMovieToRentMovies(movie)
                    }
                    }>Alquilar
                    </button>
                </div>
            </div>

        </div>
    )
}