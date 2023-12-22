import React from 'react';
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {MovieInfo} from "../components/MovieInfo";
import {useParams} from "react-router";
import {useMovieContext} from "../context/MovieContext";


export const MovieView = () => {

    const {name} = useParams();
    const {movies} =   useMovieContext()
    const {addMovieToRentMovies} = useMovieContext();
    const {rentMovies} = useMovieContext();

    const movie = movies.find(movie => movie.name === name);


    return (
        <div>
            <Header/>
            <MovieInfo movie={movie} addMovieToRentMovies={addMovieToRentMovies} rentMovies={rentMovies}/>
            <Footer/>
        </div>
    )

}