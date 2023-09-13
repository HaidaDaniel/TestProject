/** @format */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../saga/actions'
import PropTypes from 'prop-types'
import { productsDataPropTypes } from './PropTypes/ProductShape'
import ProductItem from './ProductItem'
import { StyledRow, StyledCol } from './styled/ProductsGridStyles'

function ProductsGrid({ productsData, onProductClick }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

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
  productsData: productsDataPropTypes.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
