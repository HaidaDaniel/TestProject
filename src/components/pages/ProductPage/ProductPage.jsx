/** @format */
// import { detailedProductShape } from '../../PropTypes/DetailedProductShape/DetailedProductShape'
import Header from '../../Header/Header'
import ProductPageBody from '../../ProductPageBody/ProductPageBody'
import { Container } from 'react-bootstrap'

function ProductPage({ data }) {
  return (
    <Container>
      <Header></Header>
      {data && <ProductPageBody data={data}></ProductPageBody>}
    </Container>
  )
}
export default ProductPage

// ProductPage.propTypes = {
//   data: detailedProductShape.isRequired,
// }
