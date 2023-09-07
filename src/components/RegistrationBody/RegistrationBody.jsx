/** @format */

import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

function RegistrationBody() {
  const RegistrationBox = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 50%;
    border: 1px solid grey;
  `
  return (
    <RegistrationBox>
      <Form className='w-50 '>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address </Form.Label>
          <Form.Control type='email' placeholder='Email address' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupFirstName'>
          <Form.Label>First name </Form.Label>
          <Form.Control placeholder='First name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupLastName'>
          <Form.Label>LastName </Form.Label>
          <Form.Control placeholder='LastName' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit' className='mb-3'>
          Registration
        </Button>
      </Form>
    </RegistrationBox>
  )
}
export default RegistrationBody
