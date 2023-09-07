/** @format */

import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ProductItem({ product }) {
  return (
    <div className='product-item'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>
            {product.title} {product['rating'].rate} stars
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>

          <h3>Price: {product.price}usd</h3>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductItem
