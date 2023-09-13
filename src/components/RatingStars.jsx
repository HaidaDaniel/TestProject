/** @format */
import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  RatingStarsContainer,
  Star,
  FilledStar,
  HalfFilled,
  InputRating,
  MainSpan,
} from './styled/RatingStarsStyles'

function RatingStars({ rating, isInput, onRatingChange }) {
  const [ratingInput, setRatingInput] = useState('')

  const handleInputBlur = () => {
    onRatingChange(ratingInput)
  }

  return (
    <RatingStarsContainer>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = (rating || ratingInput) - index

        return (
          <MainSpan key={index}>
            {starValue >= 0.8 && <FilledStar>&#9733;</FilledStar>}
            {starValue >= 0.3 && starValue < 0.8 && (
              <HalfFilled>&#9733;</HalfFilled>
            )}
            {starValue < 0.3 && <Star>&#9733;</Star>}
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
