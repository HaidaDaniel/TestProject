/** @format */
// import { detailedProductShape } from '../../PropTypes/DetailedProductShape/DetailedProductShape'
import Header from '../Header'
import ProductPageBody from '../ProductPageBody'
import { Container, Row, Col } from 'react-bootstrap'

function ProductPage({ data }) {
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>{data && <ProductPageBody data={data}></ProductPageBody>}</Col>
      </Row>
    </Container>
  )
}
export default ProductPage

// ProductPage.propTypes = {
//   data: detailedProductShape.isRequired,
// }
