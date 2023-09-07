/** @format */
import Comment from '../Comment/Comment'

function CommentsBlock({ comments }) {
  console.log(comments)
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <Comment
            author={comment.authot}
            text={comment.text}
            rating={comment.rating}
          />
        ))}
    </>
  )
}
export default CommentsBlock
