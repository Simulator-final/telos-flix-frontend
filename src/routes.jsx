import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieProvider from "./contexts/MovieProvider";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes";
import MovieDetails from "./components/movieDetails";
import VideoPlayer from "./components/videoPlayer";
import AuthProvider from "./contexts/AuthProvider";
import Header from "./components/header";
import Search from "./components/search";
import MovieGenres from "./components/movieGenres";
import RateProvider from "./contexts/RateProvider";

export default function AppRoutes() {
  return (
    <MovieProvider>
      <AuthProvider>
        <RateProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                element={

                  <Home />

                }
                path="/"
                exact
              />

              <Route
                element={
                  <MovieDetails />

                }
                path="/movies/:id"
              />
              <Route
                element={
                  <ProtectedRoutes >

                  </ProtectedRoutes>
                }
                path="/admin/*"
              />
              <Route
                element={
                  <ProtectedRoutes>
                    <VideoPlayer />
                  </ProtectedRoutes>
                }
                path="/movies/:id/video_player"
              />

              <Route
                element={
                  <Search />
                }
                path="/search"
              />

              <Route
                element={
                  <MovieGenres />
                }
                path="/movies/genres/:genre"
              />

            </Routes>
          </BrowserRouter>
        </RateProvider>
      </AuthProvider>
    </MovieProvider>
  );
}