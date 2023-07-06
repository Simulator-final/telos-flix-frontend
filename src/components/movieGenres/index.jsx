import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieContext';
import { Link } from 'react-router-dom';
import './index.css';

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

function MovieGenres() {
  const { moviesByGenre, fetchMovieByGenre } = useContext(MovieContext);
  const { genre } = useParams();

  useEffect(() => {
    fetchMovieByGenre(genre);
  }, [genre, fetchMovieByGenre]);

  const movies = moviesByGenre[genre] || [];

  return (
    <div className='app'>
      <div className='movie-card-container'>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
        {/* Add another MovieCard component */}
        <MovieCard
          movie={{
            _id: 'another-movie-id',
            image: 'path-to-another-movie-image.jpg',
          }}
        />
      </div>
    </div>
  );
}

export default MovieGenres;
