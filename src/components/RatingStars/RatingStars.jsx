/** @format */
import { useState } from 'react'
import './index.css'

function RatingStars({ rating, isInput }) {
  const [ratingInput, setRatingInput] = useState(0)

  const roundedRating = Math.round((rating | ratingInput) * 2) / 2

  //   const handleClick = (index) => {
  //     setRoundedRating(index + 0.5)
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Отправляем значение рейтинга на бэкенд
    // ...
  }

  return (
    <div className='rating-stars'>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 0.5

        let starClass = 'star'

        if (isInput) {
          starClass += ' input'
        }

        if (starValue <= roundedRating) {
          starClass += ' filled'
        } else if (starValue - 0.5 < roundedRating) {
          starClass += ' half-filled'
        }

        return (
          <span key={index} className={starClass}>
            &#9733;
          </span>
        )
      })}
      {(rating || ratingInput) + '/' + 5}
    </div>
  )
}

export default RatingStars
