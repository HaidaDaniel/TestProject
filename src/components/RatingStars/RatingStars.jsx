/** @format */
import PropTypes from 'prop-types'
import { useState } from 'react'
import './index.css'

function RatingStars({ rating, isInput, onRatingChange }) {
  const [ratingInput, setRatingInput] = useState('')

  const handleInputBlur = () => {
    onRatingChange(ratingInput)
  }

  return (
    <div className='rating-stars'>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = (rating || ratingInput) - index

        let starClass = 'star'

        if (isInput) {
          starClass += ' input'
        }

        if (starValue >= 0.8) {
          starClass += ' filled'
        } else if ((starValue < 0.8) & (starValue >= 0.2)) {
          starClass += ' half-filled'
        }

        return (
          <span key={index} className={starClass}>
            &#9733;
          </span>
        )
      })}
      {isInput && (
        <input
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
    </div>
  )
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  isInput: PropTypes.bool,
  onRatingChange: PropTypes.func,
}

export default RatingStars
