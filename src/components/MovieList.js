import React from 'react';
import '../styles/MovieList.css';


export const MovieList = (props) => {
    return (
        <div className="grid">
            {props.children}
        </div>
    )
}