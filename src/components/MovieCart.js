import React from 'react';


export const MovieCart = ({total}) => {

    return(
        <div className="movie-cart">
            <div className="movie-info">
                <p>Total de peliculas {total}</p>
            </div>
        </div>
    )
}