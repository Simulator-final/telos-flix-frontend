import React, { useState } from 'react'
import { Rating, Box } from '@mui/material'
import { Star } from '@mui/icons-material'
import styled from 'styled-components';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#3888FF',
  },
  '& .MuiRating-iconHover': {
    color: '#3888FF',     
  },
});

const RattingStars = () => {
  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(-1)

  return (
    <StyledRating
      size="large"
      name='hover-feed'
      value={value}
      precision={0.5}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover)
      }}
      emptyIcon={<Star style={{ opacity: 2, borderRadius: "3px" }} fontSize="inherit" />}
    />
  )
}

export default RattingStars;