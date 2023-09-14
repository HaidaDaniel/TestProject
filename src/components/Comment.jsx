/** @format */
import PropTypes from 'prop-types'

import { RatingStars } from './index'

import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardText,
  StyledAuthorText,
} from '../styled/CommentStyles'

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
