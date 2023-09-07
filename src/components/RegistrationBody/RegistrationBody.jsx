/** @format */

import { Form, Button, Col } from 'react-bootstrap'

function RegistrationBody() {
  return (
    <div>
      <Form className=' pt-3'>
        <Col xs={12} md={6} className='mx-auto border rounded'>
          <h3>Registration Form</h3>
          <Form.Group className='mb-3 mx-4 mt-3' controlId='formGroupEmail'>
            <Form.Label>Email address </Form.Label>
            <Form.Control type='email' placeholder='Email address' />
          </Form.Group>
          <Form.Group className='mb-3 mx-4' controlId='formGroupFirstName'>
            <Form.Label>First name </Form.Label>
            <Form.Control placeholder='First name' />
          </Form.Group>
          <Form.Group className='mb-3 mx-4' controlId='formGroupLastName'>
            <Form.Label>LastName </Form.Label>
            <Form.Control placeholder='LastName' />
          </Form.Group>
          <Form.Group className='mb-3 mx-4' controlId='formGroupPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' className='mb-3'>
            Registration
          </Button>
        </Col>
      </Form>
    </div>
  )
}
export default RegistrationBody
