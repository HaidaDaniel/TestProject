/** @format */
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '../redux/auth'
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarCollapse,
} from '../styled/HeaderStyles'

function Header() {
  let auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  console.log(auth)
  const handleLogout = () => {
    dispatch(logout())
  }

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
          {!auth.isLoading && auth.user === null && (
            <>
              <Nav.Link as={Link} to='/registration'>
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            </>
          )}
          {!auth.isLoading && auth.user !== null && (
            <>
              {/* <Nav.Item>
                <Nav.Link as={Link} to='#' onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav.Item> */}
            </>
          )}
        </Nav>
      </StyledNavbarCollapse>
    </StyledNavbar>
  )
}

export default Header

Header.propTypes = {}
