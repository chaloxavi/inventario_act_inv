import React from 'react';
import '../styles/MovieSearch.css'

export const MovieSearch = ({searchValue,setSearchValue}) => {


    return(
        <div className='search'>
            <input type='text'
                   placeholder="Buscar pelicula"
                   value={searchValue}
                   onChange={(event) => {
                     setSearchValue(event.target.value);
            }} />
        </div>
    )
}