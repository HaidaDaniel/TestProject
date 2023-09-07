/** @format */

import { Form, Button, Col } from 'react-bootstrap'
import styled from 'styled-components'

function LoginBody() {
  return (
    <>
      <Form className='pt-3'>
        <Col xs={12} md={6} className='mx-auto border rounded pt-1'>
          <h3>Login</h3>
          <Form.Group className='my-3 mx-4' controlId='formGroupEmail'>
            <Form.Label>Email address or nickname</Form.Label>
            <Form.Control
              type='string'
              placeholder='Email address or nickname'
            />
          </Form.Group>
          <Form.Group className='mb-3 mx-4' controlId='formGroupPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' className='mb-3'>
            Login
          </Button>
        </Col>
      </Form>
    </>
  )
}
export default LoginBody
