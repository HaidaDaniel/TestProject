/** @format */
import React from 'react'
import PropTypes from 'prop-types'
import { productShape } from './PropTypes/ProductShape'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'
import {
  StyledProductItem,
  ProductCard,
  ProductImageBox,
  ProductName,
  StyledLink,
} from './styled/ProductsItemStyles'

function ProductItem({ product, onProductClick }) {
  return (
    <StyledProductItem>
      <Card style={{ width: '100%' }} className=' h-100 p-1'>
        <ProductImageBox className='d-flex flex-column h-100 justify-content-center'>
          <Link
            to={`/products/${product.id}`}
            onClick={() => onProductClick(product.id)}>
            <Card.Img src={product.image} alt={product.title} />
          </Link>
        </ProductImageBox>
        <ProductCard>
          <Card.Title>
            <StyledLink
              onClick={() => onProductClick(product.id)}
              to={`/products/${product.id}`}>
              <ProductName>{product.title}</ProductName>
              <br />
            </StyledLink>
          </Card.Title>
          <div>
            <RatingStars rating={product.rating.rate}></RatingStars>
            <h4>{product.rating.count} orders</h4>
          </div>
        </ProductCard>
        <Card.Footer className='mt-auto'>
          <h5>Price: {product.price}usd</h5>
          <Link to={`/products/${product.id}`}>
            <Button onClick={() => onProductClick(product.id)}>
              Get details
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </StyledProductItem>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: productShape.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
