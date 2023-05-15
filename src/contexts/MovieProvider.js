import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/movies")
      .then((response) => {
        console.log(response.data.movies)
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <MovieContext.Provider value={[movies, setMovies]}>{children}</MovieContext.Provider>;
}
