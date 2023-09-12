/** @format */
import PropTypes from 'prop-types'
import RatingStars from './styled/RatingStars'
import { useState } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'

function CommentInput({ productId }) {
  const [rating, setRating] = useState(null)
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      productId,
      rating,
      text,
    }

    await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setRating(null)
    setText('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <RatingStars isInput onRatingChange={setRating} />
      <FormGroup>
        <label htmlFor='text'>Review text</label>
        <textarea
          id='text'
          name='text'
          cols='65'
          rows='9'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormGroup>
      <Button type='submit'>Send</Button>
    </Form>
  )
}
export default CommentInput

CommentInput.propTypes = {
  productId: PropTypes.string.isRequired,
}
