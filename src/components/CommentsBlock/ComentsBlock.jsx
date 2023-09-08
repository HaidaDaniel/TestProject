/** @format */
import Comment from '../Comment/Comment'

function CommentsBlock({ comments }) {
  console.log(comments)
  return (
    <div className='comment-block'>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.commentId}
            author={comment.author}
            text={comment.text}
            rating={comment.rating}
          />
        ))}
    </div>
  )
}
export default CommentsBlock
