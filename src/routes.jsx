import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoutes from "./components/protectedRoutes/admin";
import MovieDetails from "./components/movieDetails";
import { MovieContext } from "./contexts/MovieContext";
import VideoPlayer from "./components/videoPlayer";


export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);
  const { apiURL } = useContext(MovieContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          element={
            <MovieProvider>
              <Home />
            </MovieProvider>
          } 
          path="/" 
          exact 
        />

        {isAuthenticated ? (
          <Route
            element={
              <MovieProvider>
                <Video />
              </MovieProvider>
            }
            path="/video"
            exact
          />
        ) : (
          <Route path="/video" exact />
        )}

        <Route
          element={
            <MovieProvider>
              <MovieDetails />
            </MovieProvider>
          }
          path="/video/:id"
        />
        <Route 
          element={
            <ProtectedRoutes />
          }
          path="/admin/*" 
        />
        <Route
          element={
            <MovieProvider>
              <VideoPlayer />
            </MovieProvider>
          }
          path="/video/:id/video_player"
        />
      </Routes>
    </BrowserRouter>
  );
}
