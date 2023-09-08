/** @format */
import './index.css'

function RatingStars({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2
  const totalStars = 5

  return (
    <div className='rating-stars'>
      {Array.from({ length: totalStars }).map((_, index) => {
        const starValue = index + 0.5

        let starClass = 'star'

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
      {rating + '/' + totalStars}
    </div>
  )
}
export default RatingStars
