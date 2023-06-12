import React, { useContext } from "react";
import { Button } from "@mui/material";
import {
  ArrowForward,
  QuestionAnswer,
  QuestionMark,
  QuestionMarkRounded,
  Settings,
} from "@mui/icons-material";

import { MovieContext } from "../../contexts/MovieContext";
import "./index.css";


function DontKnowWhatToWatch() {
  const { genres } = useContext(MovieContext);


  return (
    <div className="dontKnowWhatToWatch">
      <div className="labelSection">
        <QuestionMarkRounded /> Ainda não sabe o que assistir?
      </div>
      <div className="dontKnowWhatToWatchgrid">
        {genres.map((genre) => (
          <Button className="categoryButton" key={genre}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Settings />
              {genre}
            </div>
            <ArrowForward />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DontKnowWhatToWatch;
