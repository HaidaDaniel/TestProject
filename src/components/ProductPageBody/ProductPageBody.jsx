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
          <Row>
            <h3>{data.title}</h3>
          </Row>
          <Row>
            <p>Rating:</p>
            <RatingStars rating={data.rating.rate} />{' '}
            <p>{data.rating.rate}/5</p>
          </Row>
          <Row>
            <h4>Price:{' ' + data.price + ' '}usd</h4>
          </Row>
          <Row>
            <h5>
              Description: <br />
              {data.description}
            </h5>
          </Row>

          <Row>{comments && <CommentsBlock comments={comments} />}</Row>
        </Col>
      </Row>
    </>
  )
}
export default ProductPageBody
