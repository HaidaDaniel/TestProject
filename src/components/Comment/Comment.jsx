/** @format */

function Comment({ author, text, rating }) {
  return (
    <div className='comment'>
      <h4>{author}</h4>
      <p>{text}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default Comment
