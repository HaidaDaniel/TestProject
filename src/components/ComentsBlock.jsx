/** @format */
import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from 'react-bootstrap'

import Comment from './Comment'
import { StyledCommentsBlock } from '../styled/CommentsBlockStyles'

function CommentsBlock({ comments }) {
  return (
    <StyledCommentsBlock>
      <div className='comment-block mt-2'>
        <h5>Customer Reviews :</h5>
        <Stack gap={3}>
          {comments &&
            comments.map((comment) => (
              <Comment
                key={comment.commentId}
                author={comment.author}
                text={comment.text}
                rating={comment.rating}
              />
            ))}
        </Stack>
      </div>
    </StyledCommentsBlock>
  )
}

export default CommentsBlock

CommentsBlock.propTypes = {
  comments: PropTypes.array.isRequired,
}
