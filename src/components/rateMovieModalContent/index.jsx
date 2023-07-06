import { OutlinedInput } from '@mui/material';
import React, { useContext, useState } from 'react';
import './index.css';
import RattingStars from '../rattingStars';
import { RateContext } from '../../contexts/RateContext';
import { useParams } from 'react-router-dom';

function RateMovieModalContent() {
  const { movieRating } = useContext(RateContext); // Access the movieRating function from RateContext
  const [comment, setComment] = useState('');
  const { id } = useParams(); // Get the movie ID from the URL params

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingSubmit = () => {
    const movie_id = id; // Use the movie ID obtained from the URL params
    const rating = 5; // Example rating value, you can change it dynamically based on your rating component
    movieRating({ movie_id, content: comment, rating }); // Call the movieRating function with movie ID, comment, and rating
  };

  return (
    <div className="RateModal">
      <main className="RateModalMain">
        <div className="WhatsIsYourOpinion">
          <h3>O que você achou do filme ?</h3>
          <p>Dê cinco estrelas se recomendaria para seus amigos e uma caso possa até falar mal para eles.</p>
          <div className="RatingStarsDiv">
            <RattingStars />
          </div>
        </div>
        <div className="HaveSomeComment">
          <h5>Tem algum comentário ?</h5>
          <OutlinedInput
            sx={{
              background: '#3D4757',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
              borderRadius: '15px',
              height: '75px',
              width: '370px',
              color: 'rgba(255, 255, 255, 0.45)',
            }}
            placeholder="Deixe seu comentario..."
            type="text"
            value={comment}
            onChange={handleCommentChange}
          ></OutlinedInput>
        </div>
      </main>
      <footer>
        <div className="buttons">
          <button className="ImNotInTheMoodButton">Não tô afim agora</button>
          <button className="SendButton" onClick={handleRatingSubmit}>
            Enviar
          </button>
        </div>
      </footer>
    </div>
  );
}

export default RateMovieModalContent;
