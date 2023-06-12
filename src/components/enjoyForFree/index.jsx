import { CardGiftcardOutlined } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import MiniVideoCard from "../miniVideoCard";
import "./index.css";

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

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const isImageAvailable = await checkImageAvailability(movie.image);

    if (isImageAvailable) {
      filteredMovies.push(movie);
    }

    if (filteredMovies.length === 3) {
      break; // Exit the loop after adding three movies
    }
  }

  return filteredMovies;
}

function EnjoyForFree() {
  const { apiURL, freeMovies } = useContext(MovieContext);
  const movies = freeMovies || [];

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
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="trendingVideosGrid">
        {filteredMovies.map((movie) => (
          movie ? (
            <Link
              style={{
                textDecoration: "none",
                color: "#EEEEEE",
              }}
              to={`/video/${movie._id}`}
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

export default EnjoyForFree;
