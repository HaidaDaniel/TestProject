/** @format */

import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarCollapse,
} from '../styled/HeaderStyles'

function Header() {
  return (
    <StyledNavbar expand='lg'>
      <StyledNavbarBrand as={Link} to='/' href='#' className='mx-4'>
        Shop
      </StyledNavbarBrand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <StyledNavbarCollapse
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
      </StyledNavbarCollapse>
    </StyledNavbar>
  )
}

export default Header

Header.propTypes = {}
