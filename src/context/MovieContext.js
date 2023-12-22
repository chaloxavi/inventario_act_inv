import React, {createContext, useContext} from 'react';

export const MovieContext = createContext();
export const MovieProvider = ({children}) => {

    const moviesList = [
        {
            name: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            publication: '1994',
            sinopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            critics: '9.3/10',
            duration: '142 min',
            image: 'https://pics.filmaffinity.com/the_shawshank_redemption-576140557-mmed.jpg',
            youtubeId: 'PLl99DlL6b4'
        },
        {
            name: 'The Godfather',
            director: 'Francis Ford Coppola',
            publication: '1972',
            sinopsis: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
            critics: '9.2/10',
            duration: '175 min',
            image: '//upload.wikimedia.org/wikipedia/en/thumb/a/af/The_Godfather%2C_The_Game.jpg/220px-The_Godfather%2C_The_Game.jpg',
            youtubeId: 'eZHsmb4ezEk'
        },
        {
            name: 'Inception',
            director: 'Christopher Nolan',
            publication: '2010',
            sinopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            critics: '8.8/10',
            duration: '148 min',
            image: 'https://pics.filmaffinity.com/inception-652954101-mmed.jpg',
            youtubeId: 'BZOMKZ0AwC8'
        },
        {
            name: 'Forrest Gump',
            director: 'Robert Zemeckis',
            publication: '1994',
            sinopsis: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
            critics: '8.8/10',
            duration: '142 min',
            image: 'https://pics.filmaffinity.com/forrest_gump-212765827-mmed.jpg',
            youtubeId: 'bLvqoHBptjg'
        },
        {
            name: 'The Dark Knight',
            director: 'Christopher Nolan',
            publication: '2008',
            sinopsis: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            critics: '9.0/10',
            duration: '152 min',
            image: 'https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY445_.jpg',
            youtubeId: 'TQfATDZY5Y4'
        },
        {
            name: 'Pulp Fiction',
            director: 'Quentin Tarantino',
            publication: '1994',
            sinopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            critics: '8.9/10',
            duration: '154 min',
            image: 'https://pics.filmaffinity.com/pulp_fiction-210382116-mmed.jpg',
            youtubeId: 's7EdQ4FqbhY'
        },
        {
            name: 'Schindler\'s List',
            director: 'Steven Spielberg',
            publication: '1993',
            sinopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
            critics: '8.9/10',
            duration: '195 min',
            image: 'https://miro.medium.com/v2/resize:fit:600/1*FtzwO3JEyJbUwUmyUJE_Dw.jpeg',
            youtubeId: 'mxphAlJID9U'
        },
        {
            name: 'Fight Club',
            director: 'David Fincher',
            publication: '1999',
            sinopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
            critics: '8.8/10',
            duration: '139 min',
            image: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
            youtubeId: 'SUXWAEX2jlg'
        },
        {
            name: 'The Matrix',
            director: 'Lana Wachowski, Lilly Wachowski',
            publication: '1999',
            sinopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            critics: '8.7/10',
            duration: '136 min',
            image: 'https://pics.filmaffinity.com/the_matrix-155050517-mmed.jpg',
            youtubeId: 'm8e-FF8MsqU'
        },
        {
            name: 'The Lord of the Rings: The Fellowship of the Ring',
            director: 'Peter Jackson',
            publication: '2001',
            sinopsis: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
            critics: '8.8/10',
            duration: '178 min',
            image: 'https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg?h=375&resize=fit&w=250',
            youtubeId: 'V75dMMIW2B4'
        },
        {
            name: 'The Silence of the Lambs',
            director: 'Jonathan Demme',
            publication: '1991',
            sinopsis: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
            critics: '8.6/10',
            duration: '118 min',
            image: 'https://s3.amazonaws.com/criterion-production/films/46014912ca0c20592c472f5bbe33e4f8/L9AQ95Y7z2vOIUf1ntwvpZsZx3kp8B_large.jpg',
            youtubeId: 'W6Mm8Sbe__o'
        },
        {
            name: 'Goodfellas',
            director: 'Martin Scorsese',
            publication: '1990',
            sinopsis: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
            critics: '8.7/10',
            duration: '146 min',
            image: 'https://biblioteca.udem.edu.mx/images/2020/02/24/Goodfellas.jpg',
            youtubeId: 'YG-xtY2NQpA'
        }
    ];




    const [movies, setMovies] = React.useState(moviesList);

    const [rentMovies, setRentMovies] = React.useState([]);

    const addMovieToRentMovies = (movie) => {
        setRentMovies((prevRentMovies) => {
            const isMovieAlreadyInRentMovies = prevRentMovies.some((m) => m.name === movie.name);

            if (!isMovieAlreadyInRentMovies) {
                return [...prevRentMovies, movie];
            }
            return prevRentMovies;
        });
    };


    return (
        <MovieContext.Provider value={{movies, setMovies, rentMovies, addMovieToRentMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext);
};