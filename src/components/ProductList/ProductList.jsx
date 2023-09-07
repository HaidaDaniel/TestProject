/** @format */

import React, { useState, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styled from 'styled-components'

function ProductList() {
  const [products, setProducts] = useState([])

  const ProductListGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `

  useEffect(() => {
    fetch('http://demo5127360.mockable.io/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No response is not OK')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error in response', error)
      })
  }, [])

  return (
    <ProductListGrid>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListGrid>
  )
}

export default ProductList
