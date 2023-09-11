/** @format */
import Header from '../../Header/Header'
import ProductPageBody from '../../ProductPageBody/ProductPageBody'
import { Container } from 'react-bootstrap'

function ProductPage({ data }) {
  console.log(data)
  return (
    <Container>
      <Header></Header>
      {data && <ProductPageBody data={data}></ProductPageBody>}
    </Container>
  )
}
export default ProductPage
