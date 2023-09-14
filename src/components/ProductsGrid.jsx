/** @format */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsRequest } from '../redux/products'
import PropTypes from 'prop-types'

import ProductItem from './ProductItem'
import { StyledRow, StyledCol } from '../styled/ProductsGridStyles'

function ProductsGrid({ onProductClick }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProductsRequest())
  }, [])

  return (
    <StyledRow>
      {products &&
        products.map((product) => (
          <StyledCol key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} onProductClick={onProductClick} />
          </StyledCol>
        ))}
    </StyledRow>
  )
}

export default ProductsGrid

ProductsGrid.propTypes = {
  onProductClick: PropTypes.func.isRequired,
}
