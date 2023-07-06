import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";

async function checkImageAvailability(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();

    img.addEventListener("error", () => {
      resolve(false); // Image failed to load (404 not found)
    });

    img.addEventListener("load", () => {
      resolve(true); // Image loaded successfully
    });

    img.src = imageUrl;
  });
}

async function filterMoviesByImageAvailability(movies) {
  const filteredMovies = [];

  let count = 0; // Track the number of movies added

  for (let i = 0; i < movies.length && count < 4; i++) {
    const movie = movies[i];
    const isImageAvailable = await checkImageAvailability(movie.image);

    if (isImageAvailable) {
      filteredMovies.push(movie);
      count++;
    }
  }

  return filteredMovies;
}



function Trending() {
  const { trendingMovies } = useContext(MovieContext);
  console.log(trendingMovies);
  const movies = trendingMovies || [];

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      const filteredMovies = await filterMoviesByImageAvailability(movies);
      setFilteredMovies(filteredMovies);
    };

    fetchFilteredMovies();
  }, [movies]);

  return (
    <div className="trendingSection">
      <div className="labelSection" style={{marginLeft: "60px"}}> Em alta</div>
      <div className="trendingVideosGrid">
        {filteredMovies.map((movie) => (
          movie ? (
            <Link
              style={{
                textDecoration: "none",
                color: "#EEEEEE",
              }}
              to={`movies/${movie._id}`}
              key={movie._id}
            >
              <MiniVideoCard image={movie.image} />
            </Link>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default Trending;
