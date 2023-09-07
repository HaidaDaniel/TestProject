/** @format */
import Header from '../../Header/Header'
import { Container } from 'react-bootstrap'
import ProductsGrid from '../../ProductsGrid/ProductsGrid'

function Main({ productsData, onShowDetailClick }) {
  return (
    <Container>
      <Header></Header>
      <ProductsGrid
        productsData={productsData}
        onShowDetailClick={onShowDetailClick}
      />
    </Container>
  )
}
export default Main
