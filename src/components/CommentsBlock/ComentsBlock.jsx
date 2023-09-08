/** @format */
import Comment from '../Comment/Comment'
import { Stack } from 'react-bootstrap'
import './index.css'

function CommentsBlock({ comments }) {
  return (
    <div className='comment-block'>
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
