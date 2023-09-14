/** @format */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

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

function ProductItem({ product }) {
  return (
    <StyledProductItem>
      <CardStyled>
        <ProductImageBox>
          <Link to={`/products/${product.id}`}>
            <Card.Img src={product.image} alt={product.title} />
          </Link>
        </ProductImageBox>
        <ProductCard>
          <StyledCardTitle>
            <StyledLink to={`/products/${product.id}`}>
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
            <Button>Get details</Button>
          </Link>
        </Card.Footer>
      </CardStyled>
    </StyledProductItem>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: productShape.isRequired,
}
