/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../Header/Header'
import { Container } from 'react-bootstrap'
import ProductsGrid from '../../ProductsGrid/ProductsGrid'

function Main({ productsData, onShowDetailClick }) {
  return (
    <Container>
      <Header />
      <ProductsGrid
        productsData={productsData}
        onShowDetailClick={onShowDetailClick}
      />
    </Container>
  )
}

export default Main

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
})
export const productsDataPropTypes = PropTypes.arrayOf(productShape)
Main.propTypes = {
  productsData: productsDataPropTypes.isRequired,
  onShowDetailClick: PropTypes.func.isRequired,
}
