/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar
      sticky='top'
      bg='primary'
      expand='lg'
      className='justify-content-between my-2 rounded'>
      <Navbar.Brand as={Link} to='/' href='#' className='navbar-shop mx-4'>
        Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse
        id='basic-navbar-nav'
        className='justify-content-end mx-2'>
        <Nav className='ml-auto mx-2'>
          <Nav.Link as={Link} to='/registration'>
            Registration
          </Nav.Link>
          <Nav.Link as={Link} to='/login'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

Header.propTypes = {}
