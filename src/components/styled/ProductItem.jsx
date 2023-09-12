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
  height: 48rem;
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
`

const ProductImageBox = styled.div`
  display: flex;
  padding: 1rem;
`
const ProductName = styled.p`
  text-decoration: none;
  color: #212529;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #212529;

  &:hover {
    text-decoration: underline;
  }
`
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
