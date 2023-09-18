/** @format */
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import RatingStars from './RatingStars'

function Comment({ author, text, rating }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Header className='d-flex'>
          <RatingStars rating={rating} isInput={false} />
        </Card.Header>
        <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>

        <Card.Text className='' style={{ textAlign: 'left' }}>
          {text}
        </Card.Text>
        <Card.Text className='d-flex justify-content: flex-end'>
          {author}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comment

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
