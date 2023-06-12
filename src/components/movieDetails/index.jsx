import React, { 
useState, 
useContext,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import WatchButton from "../../components/watchButton";
import RateButton from "../../components/rateButton";
import "./index.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Carousel from "../../components/carousel";
import RateMovieModal from "../../components/rateMovieModal";
import CustomizedProgressBars from "../../components/progressBar";
import { MovieContext } from "../../contexts/MovieContext";
import { AuthContext } from "../../contexts/AuthContext";

function MovieDetails() {
  const [open, setOpen] = useState(false);
  const { trendingMovies, freeMovies } = useContext(MovieContext);
  const movies = [...trendingMovies, ...freeMovies];
  const { id } = useParams(); // Obtém o ID do filme da rota
  // Encontra o filme correspondente com base no ID
  const movie = movies.find((movie) => movie?._id === id);
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(AuthContext);

  if (!movie) {
    return <h2>Carregando...</h2>;   
  }

  function handleWatchButton () {
    if(isLoggedIn) {
      navigate(`/video/${id}/video_player`);
    } else {
      alert("Para assistir o filme, é necessário fazer login.");
    }
  }

  return (
    <div className="bodyMovieInformations">
      <div className="VideoCard" style={{ backgroundImage: `url(${movie?.image})`, backgroundSize: "cover",
  backgroundPosition: "center",}}>
        <h1 className="MovieTitle">
          {movie?.title} {/* Exibe o nome do filme */}
        </h1>
        <div className="VideoCard__buttons">
          <WatchButton onClick={() => handleWatchButton()} />
          <RateButton onClick={() => setOpen(true)} />
        </div>
      </div>
      <div className="Footer">
        <div className="RateVideoSection">
          <h3 className="RateVideoTitle">
            {" "}
            <StarOutlinedIcon /> Se liga nessas avaliações
          </h3>
          <div className="Rates">
            <div className="RateVideoNote">
              <h1>4.8</h1>
              <h5>129 avaliações</h5>
            </div>
            <div className="RatesStars">
              <h5>
                5{" "}
                <StarOutlinedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <CustomizedProgressBars value={5 * 20} />
              </h5>
              <h5>
                4{" "}
                <StarOutlinedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <CustomizedProgressBars value={4 * 20} />
              </h5>
              <h5>
                3{" "}
                <StarOutlinedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <CustomizedProgressBars value={3 * 20} />
              </h5>
              <h5>
                2{" "}
                <StarOutlinedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <CustomizedProgressBars value={2 * 20} />
              </h5>
              <h5>
                1{" "}
                <StarOutlinedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                  }}
                />
                <CustomizedProgressBars value={1 * 20} />
              </h5>
            </div>
          </div>
        </div>
        <div className="CommentsCarrosel">
          <Carousel />
        </div>
      </div>
      <RateMovieModal open={open} setOpen={setOpen} />
    </div>
  );
}
export default MovieDetails;
