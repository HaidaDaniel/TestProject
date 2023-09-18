/** @format */
import Comment from './Comment'
import { Stack } from 'react-bootstrap'

function CommentsBlock({ comments }) {
  return (
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
  )
}
export default CommentsBlock
