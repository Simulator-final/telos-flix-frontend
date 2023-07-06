import React from 'react';
import './index.css';
import RatingStarsCommentCard from '../rattingStarsCommentCard';

function CommentCard({ user, comment, rate }) {
  return (
    <div className='CommentCard'>
      <div className='CommentCardContent'>
        <h3>{user}</h3>
        <p>{comment}</p>
        <div className='RatingNoteDiv'>
          <h5>{rate}</h5>
          <RatingStarsCommentCard value={rate} />
        </div>
      </div>
    </div>
  );
}

export default CommentCard;