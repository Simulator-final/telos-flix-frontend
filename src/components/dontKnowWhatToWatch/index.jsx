import React, { useContext } from "react";
import { Button } from "@mui/material";
import {
  ArrowForward,
} from "@mui/icons-material";

import { MovieContext } from "../../contexts/MovieContext";
import "./index.css";
import {Link} from "react-router-dom";


function DontKnowWhatToWatch() {
  const { genres } = useContext(MovieContext);


  return (
    <div className="dontKnowWhatToWatch">
      <div className="labelSection"> Ainda não sabe o que assistir?</div>
      <div className="dontKnowWhatToWatchgrid">
        {genres.map((genre) => (
          <Link to={`movies/genres/${genre}`} key={genre} style={{ textDecoration: 'none'}}>
            <Button className="categoryButton">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {genre}
              </div>
              <ArrowForward />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DontKnowWhatToWatch;
