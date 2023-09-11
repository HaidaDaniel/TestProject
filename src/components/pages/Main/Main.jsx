/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { productsDataPropTypes } from '../../PropTypes/ProductShape/ProductShape'
import Header from '../../Header/Header'
import { Container } from 'react-bootstrap'
import ProductsGrid from '../../ProductsGrid/ProductsGrid'

function Main({ productsData, onProductClick }) {
  return (
    <Container>
      <Header />
      <ProductsGrid
        productsData={productsData}
        onProductClick={onProductClick}
      />
    </Container>
  )
}

export default Main

Main.propTypes = {
  productsData: productsDataPropTypes.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
