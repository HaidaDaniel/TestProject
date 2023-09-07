/** @format */

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'

function ProductsGrid({ productsData, onShowDetailClick }) {
  return (
    <Row className='mt-1'>
      {productsData &&
        productsData.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-2'>
            <ProductItem
              product={product}
              onShowDetailClick={onShowDetailClick}
            />
          </Col>
        ))}
    </Row>
  )
}

export default ProductsGrid
