/** @format */
import RatingStars from './RatingStars'
import PropTypes from 'prop-types'
import { productShape } from '../PropTypes/ProductShape'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const StyledProductItem = styled.div`
  margin: 0.3rem;
  height: 51rem;
`

const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const ProductImage = styled.div`
  display: flex;
  padding: 1rem;
`

function ProductItem({ product, onProductClick }) {
  return (
    <StyledProductItem className='product-item'>
      <Card style={{ width: '100%' }} className=' h-100 p-1'>
        <ProductImage className='d-flex flex-column h-100 justify-content-center'>
          <Card.Img
            variant='top'
            src={product.image}
            alt={product.title}
            className=''
          />
        </ProductImage>
        <ProductCard className='product-card'>
          <Card.Title>
            {product.title} <br />
            <RatingStars rating={product.rating.rate}></RatingStars>
            <h4>{product.rating.count} orders</h4>
          </Card.Title>
        </ProductCard>
        <Card.Footer className='mt-auto'>
          <h3>Price: {product.price}usd</h3>
          <Link to={`/products/${product.id}`}>
            <Button
              onClick={() => onProductClick(product.id)}
              variant='primary'>
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
