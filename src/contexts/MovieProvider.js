import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";
import { useParams } from "react-router-dom";

export default function MovieProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [flashMessage, setFlashMessage] = useState("");
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [moviesByGenreArray, setMoviesByGenreArray] = useState([]);
  const apiURL = "http://localhost:3333/movies";
  const { genre } = useParams();

  const fetchMovies = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('user'))?.token;
      const moviesResponse = await axios.get(apiURL, {headers:{'Authorization': `Bearer ${token}`}});
      const allData = moviesResponse.data;

      setTrendingMovies(allData.slice(0, 5));
      setFreeMovies(allData.slice(5, 9));

    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoviesGenres = async () => {
    try {
      const moviesGenres = await axios.get(`${apiURL}/genres`);
      const allGenres = moviesGenres.data;

      setGenres(allGenres);

    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchMovieByGenre = async (genre) => {
    try {
      const moviesByGenreResponse = await axios.get(`${apiURL}?genres=${genre}`);
      const moviesData = moviesByGenreResponse.data;
      console.log('Movies data:', moviesData);

      setMoviesByGenre((prevMoviesByGenre) => ({
        ...prevMoviesByGenre,
        [genre]: moviesData,
      }));
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchMoviesGenres();
    fetchMovieByGenre(genre); // Call the fetchMovieByGenre function with the selected genre
  }, [genre]);

  useEffect(() => {
    console.log('Movies by genre:', moviesByGenre);
    // Convert moviesByGenre object to an array whenever it changes
    const genreArray = Object.values(moviesByGenre).flat();
    console.log('Genre array:', genreArray);
    setMoviesByGenreArray(genreArray);
  }, [moviesByGenre]);

  const moviesData = [...trendingMovies, ...freeMovies];

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        freeMovies,
        genres,
        apiURL,
        moviesData,
        flashMessage,
        setFlashMessage,
        moviesByGenre,
        fetchMovieByGenre,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
