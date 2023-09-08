/** @format */
import { Card, Row, Col } from 'react-bootstrap'
import RatingStars from '../RatingStars/RatingStars'
import './index.css'

function Comment({ author, text, rating }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Header className='d-flex'>
          <RatingStars rating={rating} />
        </Card.Header>
        <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>Name:{' '}
        {author}
        <Card.Text className='d-flex '>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comment
