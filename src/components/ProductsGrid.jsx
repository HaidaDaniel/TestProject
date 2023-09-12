/** @format */
import PropTypes from 'prop-types'
import { productsDataPropTypes } from './PropTypes/ProductShape'
import { Row, Col } from 'react-bootstrap'
import ProductItem from './styled/ProductItem'

function ProductsGrid({ productsData, onProductClick }) {
  return (
    <Row className='mt-1'>
      {productsData &&
        productsData.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-2'>
            <ProductItem product={product} onProductClick={onProductClick} />
          </Col>
        ))}
    </Row>
  )
}

export default ProductsGrid

ProductsGrid.propTypes = {
  productsData: productsDataPropTypes.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
