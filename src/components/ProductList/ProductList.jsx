/** @format */

import React, { useState, useEffect } from 'react'
import ProductsGrid from '../ProductGrid/ProductGrid'

function ProductList() {
  const [products, setProducts] = useState([])

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

  return <ProductsGrid products={products} />
}

export default ProductList
