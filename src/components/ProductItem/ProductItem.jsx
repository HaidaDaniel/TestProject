/** @format */

import React from 'react'
import styled from 'styled-components'

function ProductItem({ product }) {
  const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
  `
  return (
    <div className='product-item'>
      <Image src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>Price: {product.price}</h3>
      <h4>Stars: {product['rating'].rate}</h4>
    </div>
  )
}

export default ProductItem
