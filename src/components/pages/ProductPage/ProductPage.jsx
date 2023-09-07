/** @format */
import Header from '../../Header/Header'
import ProductPageBody from '../../ProductPageBody/ProductPageBody'
import { Container } from 'react-bootstrap'

function ProductPage({ data, comments }) {
  return (
    <Container>
      <Header></Header>
      <ProductPageBody data={data} comments={comments}></ProductPageBody>
    </Container>
  )
}
export default ProductPage
