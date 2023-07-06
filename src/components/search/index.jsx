import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { Link } from 'react-router-dom';;

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid rgba(238, 238, 238, 0.05)',
  boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.4)',
  borderRadius: '20px',
  padding: '4px 8px', // Adjust the padding as per your preference
  '&:hover': {
    backgroundColor: '#292929',
  },
  width: '200px', // Adjust the width as per your preference
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff', // Set search icon color to white
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff', // Set input text color to white
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '200px', // Set a fixed width for the input
    '&::placeholder': {
      color: '#fff', // Set placeholder text color to white
    },
  },
}));

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie._id}`}>
        <img
          className="movie-card__image"
          src={movie.image}
          alt={movie.title}
        />
      </Link>
    </div>
  );
};

const checkImageAvailability = async (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();

    img.addEventListener('error', () => {
      resolve(false); // Image failed to load (404 not found)
    });

    img.addEventListener('load', () => {
      resolve(true); // Image loaded successfully
    });

    img.src = imageUrl;
  });
};

const filterMoviesByImageAvailability = async (movies) => {
  const filteredMovies = [];

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const isImageAvailable = await checkImageAvailability(movie.image);

    if (isImageAvailable) {
      filteredMovies.push(movie);
    }
  }

  return filteredMovies;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { moviesData } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const filterMovies = async () => {
      const filtered = await filterMoviesByImageAvailability(moviesData);
      setFilteredMovies(filtered);
    };

    filterMovies();
  }, [moviesData]);

  function stringTreatment(event) {
    const string = event?.target?.value ?? '';
    setSearchTerm(string);
  }

  return (
    <div className="app">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={stringTreatment}
        />
      </div>
      {searchTerm ? (
        <Fragment>
          <div className="movie-card-container">
            {filteredMovies
              .filter(obj => obj.title.includes(searchTerm))
              .map(filteredObj => (
                <MovieCard key={filteredObj._id} movie={filteredObj} />
              ))}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Search;