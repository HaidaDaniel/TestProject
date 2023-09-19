/** @format */
import PropTypes from 'prop-types'
import { Stack } from 'react-bootstrap'

import { Comment } from './index'
import { commentShape } from './PropTypes/DetailedProductShape'
import { StyledCommentsBlock } from '../styled/CommentsBlockStyles'

const CommentsBlock = ({ comments }) => (
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
);

export default CommentsBlock

CommentsBlock.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
}
