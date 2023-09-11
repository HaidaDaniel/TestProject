/** @format */
import RatingStars from '../RatingStars/RatingStars'
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
      <RatingStars rating={rating} isInput />
      <FormGroup>
        <label for='text'>Review text</label>
        <textarea
          id='text'
          name='text'
          cols='30'
          rows='10'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormGroup>
      <Button type='submit'>Send</Button>
    </Form>
  )
}
export default CommentInput
