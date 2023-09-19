/** @format */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsRequest } from '../redux/ducks/products'

import { ProductItem } from './index'
import { StyledRow, StyledCol } from '../styled/ProductsGridStyles'

const ProductsGrid = () => {
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
            <ProductItem product={product} />
          </StyledCol>
        ))}
    </StyledRow>
  )
}

export default ProductsGrid

ProductsGrid.propTypes = {}
