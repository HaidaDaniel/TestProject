/** @format */

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
// import styled from 'styled-components'

function Header({ setActiveComponent }) {
  return (
    <Navbar
      sticky='top'
      bg='primary'
      expand='lg'
      className='justify-content-between my-2 rounded'>
      <Navbar.Brand
        onClick={() => setActiveComponent('main')}
        href='#'
        className='navbar-shop mx-4'>
        Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse
        id='basic-navbar-nav'
        className='justify-content-end mx-2'>
        <Nav className='ml-auto mx-2'>
          <Nav.Link onClick={() => setActiveComponent('registration')} href='#'>
            Registration
          </Nav.Link>
          <Nav.Link onClick={() => setActiveComponent('login')} href='#'>
            Login
          </Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup>
            <InputGroup.Text id='basic-addon1'>login</InputGroup.Text>
            <Form.Control
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
        </Form>
        <Form inline></Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
