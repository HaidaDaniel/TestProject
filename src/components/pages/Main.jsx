/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

import Header from '../Header'
import ProductsGrid from '../ProductsGrid'

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
