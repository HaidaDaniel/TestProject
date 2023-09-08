/** @format */
import { Row, Col } from 'react-bootstrap'
import CommentsBlock from '../CommentsBlock/ComentsBlock'
import RatingStars from '../RatingStars/RatingStars'

function ProductPageBody({ data, comments }) {
  console.log(data)
  return (
    <>
      <Row className='mt-6'>
        <Col md='6' xs='12'>
          {data && (
            <img
              variant='top'
              src={data.image}
              alt={data.title}
              className='p-2'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </Col>
        <Col md='6' xs='12' className='mt-3'>
          <Row className='mb-3'>
            <h3>{data.title}</h3>
          </Row>
          <Row className='align-items-center mb-3'>
            <Col xs='auto'>
              <RatingStars rating={data.rating.rate} />
            </Col>
            <Col xs='auto' className='ml-auto my-auto'>
              <p>Price:{' ' + data.price + ' '}usd</p>
            </Col>
          </Row>
          <Row>
            <h5>Description:</h5>
          </Row>
          <Row className='mb-3'>{data.description}</Row>
          <Row className='mb-3 border rounded'>
            {comments && <CommentsBlock comments={comments} />}
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default ProductPageBody
