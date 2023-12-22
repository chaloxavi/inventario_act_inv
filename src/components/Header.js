import React from 'react';
import '../styles/Header.css';
import {useMovieContext} from "../context/MovieContext";


export const Header = () => {

    const {rentMovies} = useMovieContext();

    return (
        <div className="header">
            <a href="/Landing" className="logo">Unir Plus</a>
            <div className="header-left">
                <a href="/Principal" >Peliculas</a>
                <a href="/Planes">Planes</a>
                <span className="cart-count">Carrito: {rentMovies.length}</span>
            </div>
        </div>
    );
}