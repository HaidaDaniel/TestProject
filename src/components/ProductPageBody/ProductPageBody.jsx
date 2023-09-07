/** @format */
import { Row, Col } from 'react-bootstrap'

function ProductPageBody({ data }) {
  return (
    <>
      <Row>
        <Col>
          {data && (
            <img
              variant='top'
              src={data.image}
              alt={data.title}
              className='p-2'
            />
          )}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </>
  )
}
export default ProductPageBody
