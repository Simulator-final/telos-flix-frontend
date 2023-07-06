import React from 'react'
import { Rating } from '@mui/material'
import { Star } from '@mui/icons-material'
import styled from 'styled-components';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconHover': {
      color: '#3888FF',     
    },
  });

function ratingStarsCommentCard({value}) {

  return (
    <StyledRating
    size="small"
    name="text-feedback"
    readOnly
    value={value}
    precision={0.5}
    emptyIcon={<Star  style={{ opacity: 2, borderRadius: "3px", }} fontSize="inherit"/>}
    />
  )
}

export default ratingStarsCommentCard