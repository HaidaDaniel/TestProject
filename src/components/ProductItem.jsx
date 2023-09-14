/** @format */
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import RatingStars from './RatingStars'
import {
  StyledProductItem,
  CardStyled,
  ProductCard,
  ProductImageBox,
  StyledLink,
  StyledCardTitle,
} from '../styled/ProductItemStyles'
import { productShape } from './PropTypes/ProductShape'
import { fetchProductRequest } from '../redux/product'

function ProductItem({ product }) {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    console.log(product.id)
    dispatch(fetchProductRequest(product.id))
  }

  return (
    <StyledProductItem>
      <CardStyled>
        <ProductImageBox>
          <Link to={`/products/${product.id}`} onClick={handleProductClick}>
            <Card.Img src={product.image} alt={product.title} />
          </Link>
        </ProductImageBox>
        <ProductCard>
          <StyledCardTitle>
            <StyledLink
              onClick={handleProductClick}
              to={`/products/${product.id}`}>
              {product.title}
            </StyledLink>
          </StyledCardTitle>
          <div>
            <RatingStars rating={product.rating.rate}></RatingStars>
            <h4>{product.rating.count} orders</h4>
          </div>
        </ProductCard>
        <Card.Footer>
          <h5>Price: {product.price}usd</h5>
          <Link to={`/products/${product.id}`}>
            <Button onClick={handleProductClick}>Get details</Button>
          </Link>
        </Card.Footer>
      </CardStyled>
    </StyledProductItem>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: productShape.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
