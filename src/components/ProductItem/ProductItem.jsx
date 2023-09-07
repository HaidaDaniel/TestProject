/** @format */
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './index.css'

function ProductItem({ product, onShowDetailClick }) {
  return (
    <div className='product-item'>
      <Card style={{ width: '100%' }} className='h-100 p-1'>
        <Card.Img
          variant='top'
          src={product.image}
          alt={product.title}
          className='p-2'
        />
        <Card.Body>
          <Card.Title>
            {product.title} <h3>{product['rating'].rate} stars </h3>
            <h4>{product['rating'].count} orders</h4>
          </Card.Title>
          {/* <Card.Text>{product.description}</Card.Text> */}
        </Card.Body>
        <Card.Footer className='mt-auto'>
          <h3>Price: {product.price}usd</h3>
          <Link to={`/products/${product.id}`}>
            <Button
              onClick={() => onShowDetailClick(product.id)}
              variant='primary'>
              Get details
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ProductItem
