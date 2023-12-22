import React from 'react';
import '../styles/Movie.css';
import {Link} from "react-router-dom";


export const Movie = ({props}) => {

    return (
        <div className="card">
            <img src={props.image} alt="No disponible" />
            <div className="card-container">
                <h4><b>{props.name}</b></h4>
                <p>{props.director}</p>
                <Link to={`/MovieView/${props.name}`}>
                    <button>Selecionar</button>
                </Link>
            </div>
        </div>
    )
}