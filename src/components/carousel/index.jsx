import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import CommentCard from '../comentCard/index';
import { RateContext } from '../../contexts/RateContext';
import { useParams } from 'react-router-dom';
import './index.css'

function Carousel() {
  const { rateData, fetchComments } = useContext(RateContext);
  const [width, setWidth] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const extractedMovieId = id.replace(/\/movies\//, '');
    console.log('Movie ID:', extractedMovieId);
    fetchComments({ movie_id: extractedMovieId });
  }, [fetchComments, id]);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 120);
  }, []);

  const carousel = React.useRef(null);

  console.log('Rate Data:', rateData);

  return (
    <div className="Carousel" ref={carousel}>
      <motion.div className="CommentsCarrosel" whileTap={{ cursor: 'grabbing' }} drag="x" dragConstraints={{ right: 0, left: -width }}>
        {rateData.map((comment) => (
          <CommentCard
            key={comment._id}
            user={comment.user_id.name}
            comment={comment.content}
            rate={comment.rating}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;