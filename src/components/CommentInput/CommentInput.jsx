/** @format */
import React from 'react'
import { useState, useEffect } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Button,
} from 'react-bootstrap'

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

    // Обновляем состояние компонента
    setRating(null)
    setText('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='rating'>Оценка</Label>
        <Input
          type='number'
          id='rating'
          min='1'
          max='5'
          step='1'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='text'>Текст отзыва</Label>
        <Textarea
          id='text'
          name='text'
          cols='30'
          rows='10'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormGroup>
      <Button type='submit'>Отправить</Button>
    </Form>
  )
}
export default CommentInput
