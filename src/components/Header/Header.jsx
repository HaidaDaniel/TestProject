/** @format */

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#'>Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#'>About</Nav.Link>
          <Nav.Link href='#'>Contacts</Nav.Link>
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
