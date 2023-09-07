/** @format */
import Header from '../../Header/Header'
import ProductPageBody from '../../ProductPageBody/ProductPageBody'
import { Container } from 'react-bootstrap'

function ProductPage(props) {
  return (
    <Container>
      <Header></Header>
      <ProductPageBody props={props}></ProductPageBody>
    </Container>
  )
}
export default ProductPage
