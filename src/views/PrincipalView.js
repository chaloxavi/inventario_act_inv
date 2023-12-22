import React from 'react';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {Movie} from "../components/Movie";
import {MovieList} from "../components/MovieList";
import {MovieSearch} from "../components/MovieSearch";
import {MovieCart} from "../components/MovieCart";
import {useMovieContext} from "../context/MovieContext";


export const PrincipalView = () => {

    const {movies} = useMovieContext()

    const [searchValue, setSearchValue] = React.useState('');

    const moviesFiltered = movies.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div>
            <Header/>

            <MovieCart total={43}/>
            <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MovieList>
                {moviesFiltered.map(movie => (
                    <Movie key={movie.name} props={movie}/>
                ))}
            </MovieList>
            <Footer/>
        </div>

    );
}
