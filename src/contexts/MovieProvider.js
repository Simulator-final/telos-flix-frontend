import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const apiURL = "http://localhost:3333/movies";

  const fetchMovies = async () => {
    try {
      const moviesResponse = await axios.get(apiURL);
      const allData = moviesResponse.data;

      setTrendingMovies(allData.pages[0].movies);
      setFreeMovies(allData.pages[1].movies);

    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoviesGenres = async () => {
    try {
      const moviesGenres = await axios.get(`${apiURL}-genres`);
      const allGenres = moviesGenres.data;

      setGenres(allGenres);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchMoviesGenres();
  }, []);

  const moviesData = [...trendingMovies, ...freeMovies];
  return (
    <MovieContext.Provider
      value={{ trendingMovies, freeMovies, genres, apiURL, moviesData }}
    >
      {children}
    </MovieContext.Provider>
  );
}
