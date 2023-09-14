/** @format */

import React from 'react'
import { Container } from 'react-bootstrap'

import { Header, ProductsGrid } from '../index'

function Main() {
  return (
    <Container>
      <Header />
      <ProductsGrid />
    </Container>
  )
}

export default Main

Main.propTypes = {}
