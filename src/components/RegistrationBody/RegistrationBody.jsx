/** @format */

import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

function RegistrationBody() {
  const RegistrationBox = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <RegistrationBox>
      <Form className='w-50 '>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address or nickname</Form.Label>
          <Form.Control type='string' placeholder='Email address or nickname' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </RegistrationBox>
  )
}
export default RegistrationBody
