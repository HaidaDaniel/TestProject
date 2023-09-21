/** @format */
import { FC } from 'react'
import { Stack } from 'react-bootstrap'

import { Comment } from './'

import { StyledCommentsBlock } from '../styled/CommentsBlockStyles'
import { IComment } from './interfaces/'

interface CommentsBlockProps {
  comments: IComment[]
}

const CommentsBlock: FC<CommentsBlockProps> = ({ comments }) => (
  <StyledCommentsBlock>
    <div className='comment-block mt-2'>
      <h5>Customer Reviews :</h5>
      <Stack gap={3}>
        {comments &&
          comments.map((comment: IComment) => (
            <Comment
              key={comment.commentId}
              author={comment.author}
              text={comment.text}
              rating={comment.rating}
              commentId={comment.commentId}
            />
          ))}
      </Stack>
    </div>
  </StyledCommentsBlock>
)

export default CommentsBlock
