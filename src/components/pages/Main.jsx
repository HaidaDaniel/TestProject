/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import { productsDataPropTypes } from '../PropTypes/ProductShape'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import ProductsGrid from '../ProductsGrid'
import { useSelector } from 'react-redux'

function Main({ onProductClick }) {
  const dataR = useSelector((state) => state)
  console.log(dataR)

  return (
    <Container>
      <Header />
      <ProductsGrid onProductClick={onProductClick} />
    </Container>
  )
}

export default Main

Main.propTypes = {
  productsData: productsDataPropTypes.isRequired,
  onProductClick: PropTypes.func.isRequired,
}
