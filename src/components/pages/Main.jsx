/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { productsDataPropTypes } from '../PropTypes/ProductShape'
import Header from '../Header'
import { Container, Row, Col } from 'react-bootstrap'
import ProductsGrid from '../ProductsGrid'

function Main({ productsData, onProductClick }) {
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductsGrid
            productsData={productsData}
            onProductClick={onProductClick}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Main

Main.propTypes = {
  productsData: productsDataPropTypes.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
