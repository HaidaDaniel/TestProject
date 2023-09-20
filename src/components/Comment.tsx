/** @format */
import { FC } from 'react'

import { RatingStars } from './index'

import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardText,
  StyledAuthorText,
} from '../styled/CommentStyles'
import { IComment } from './interfaces/IProductData'

const Comment: FC<IComment> = ({ author, text, rating, commentId }) => (
  <StyledCard>
    <StyledCardHeader>
      <RatingStars rating={rating} isInput={false} />
    </StyledCardHeader>
    <StyledCardBody>
      <StyledCardText>{text}</StyledCardText>
      <StyledAuthorText>
        author:{author} <br /> review id:{commentId}
      </StyledAuthorText>
    </StyledCardBody>
  </StyledCard>
)

export default Comment
