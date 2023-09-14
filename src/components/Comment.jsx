/** @format */
import PropTypes from 'prop-types'
import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardText,
  StyledAuthorText,
} from '../styled/CommentStyles'
import RatingStars from './RatingStars'

function Comment({ author, text, rating }) {
  return (
    <StyledCard>
      <StyledCardHeader>
        <RatingStars rating={rating} isInput={false} />
      </StyledCardHeader>
      <StyledCardBody>
        <StyledCardText>{text}</StyledCardText>
        <StyledAuthorText>{author}</StyledAuthorText>
      </StyledCardBody>
    </StyledCard>
  )
}

export default Comment

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
