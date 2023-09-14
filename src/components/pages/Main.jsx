/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import ProductsGrid from '../ProductsGrid'
import { useSelector } from 'react-redux'

function Main({ onProductClick }) {
  const dataR = useSelector((state) => state.products)
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
  onProductClick: PropTypes.func.isRequired,
}
