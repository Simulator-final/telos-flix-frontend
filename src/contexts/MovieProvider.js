import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);

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

  useEffect(() => {
    fetchMovies();
  }, []);

  // Create an array with only freeMovies and trendingMovies
  const moviesData = [...trendingMovies, ...freeMovies];
  console.log(moviesData);

  return (
    <MovieContext.Provider value={{ trendingMovies, freeMovies, apiURL, moviesData }}>
      {children}
    </MovieContext.Provider>
  );
}
