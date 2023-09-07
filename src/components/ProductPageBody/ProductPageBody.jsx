/** @format */
import { Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import CommentsBlock from '../CommentsBlock/ComentsBlock'

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

            <ProgressBar
              now={data.rating.rate * 20}
              label={`${data.rating.rate * 20}%`}
              className='w-30 mx-3 p-0'
            />

            <h4>Price:{' ' + data.price + ' '}usd</h4>
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
