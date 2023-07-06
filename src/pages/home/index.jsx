import { Box } from "@mui/material";
import React from "react";
import MainVideo from "../../components/mainVideo";
import Trending from "../../components/trending";
import EnjoyForFree from "../../components/enjoyForFree";
import './index.css'
import DontKnowWhatToWatch from "../../components/dontKnowWhatToWatch";
import MovieProvider from "../../contexts/MovieProvider";
function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <MovieProvider>
        <MainVideo/>
        <div className="sectionsGrid">
          <Trending />
          <EnjoyForFree />
          <DontKnowWhatToWatch/>
        </div>
      </MovieProvider>
    </div>
  );
}

export default Home;
