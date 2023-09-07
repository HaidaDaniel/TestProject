/** @format */

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItem'

function ProductsGrid({ products }) {
  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductsGrid
