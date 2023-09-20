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

const Comment: FC<IComment> = ({ author, text, rating }) => (
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

export default Comment
