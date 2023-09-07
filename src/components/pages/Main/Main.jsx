/** @format */
import Header from '../../Header/Header'
import { Container } from 'react-bootstrap'
import ProductList from '../../ProductList/ProductList'

function Main({ productsData }) {
  return (
    <Container>
      <Header></Header>
      <ProductList productsData={productsData} />
    </Container>
  )
}
export default Main
