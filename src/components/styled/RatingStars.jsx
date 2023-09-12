/** @format */
import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

const RatingStarsContainer = styled.div`
  display: inline-block;
  margin-left: 0;
`

const Star = styled.span`
  font-size: 24px;
  color: #ccc;
`

const FilledStar = styled(Star)`
  color: #f5a623;
`

const HalfFilled = styled.span`
  position: relative;
  color: #f5a623;
  content: "\2605";
  font-size: 14px;
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
  color: #f5a623;

`
const InputRating = styled.input`
  max-width: 3rem;
`
const MainSpan = styled.span`
  display: inline-block;
  width: 24px;
`

function RatingStars({ rating, isInput, onRatingChange }) {
  const [ratingInput, setRatingInput] = useState('')

  const handleInputBlur = () => {
    onRatingChange(ratingInput)
  }

  return (
    <RatingStarsContainer className='rating-stars'>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = (rating || ratingInput) - index

        return (
          <MainSpan key={index}>
            {starValue >= 0.8 && <FilledStar>&#9733;</FilledStar>}
            {starValue >= 0.3 && starValue < 0.8 && (
              <HalfFilled>&#9733;</HalfFilled>
            )}
            {starValue < 0.2 && <Star>&#9733;</Star>}
          </MainSpan>
        )
      })}
      {isInput && (
        <InputRating
          type='number'
          min='0'
          max='5'
          step='0.5'
          value={ratingInput}
          onChange={(e) => setRatingInput(e.target.value)}
          onBlur={handleInputBlur}
        />
      )}
      {rating || ''} {'/' + 5}
    </RatingStarsContainer>
  )
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  isInput: PropTypes.bool,
  onRatingChange: PropTypes.func,
}

export default RatingStars
