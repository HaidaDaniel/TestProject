/** @format */

import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

function ProductItem({ product }) {
  const CardBox = styled.div`
    margin: 0.3rem;
    height: 53rem;
  `
  return (
    <CardBox className='product-item'>
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
          <Button variant='primary'>Get details</Button>
        </Card.Footer>
      </Card>
    </CardBox>
  )
}

export default ProductItem
