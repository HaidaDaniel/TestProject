/** @format */
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, ProductPageBody } from '../index'
import { fetchProductRequest } from '../../redux/ducks/product'

function ProductPage() {
  const dispatch = useDispatch()
  const { productId } = useParams()

  useEffect(() => {
    dispatch(fetchProductRequest(productId))
  }, [productId])

  const product = useSelector((state) => state.product.product)

  return (
    <Container>
      <Header></Header>
      {product && <ProductPageBody product={product}></ProductPageBody>}
    </Container>
  )
}
export default ProductPage

// ProductPage.propTypes = {
//   data: detailedProductShape.isRequired,
// }
