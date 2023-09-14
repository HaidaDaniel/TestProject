/** @format */
// import { detailedProductShape } from '../../PropTypes/DetailedProductShape/DetailedProductShape'
import { Container } from 'react-bootstrap'

import Header from '../Header'
import ProductPageBody from '../ProductPageBody'

function ProductPage({ data }) {
  return (
    <Container>
      <Header></Header>
      {<ProductPageBody data={data}></ProductPageBody>}
    </Container>
  )
}
export default ProductPage

// ProductPage.propTypes = {
//   data: detailedProductShape.isRequired,
// }
