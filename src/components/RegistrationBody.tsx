/** @format */
import { useState, FC } from 'react'
import { Row, Modal, Button } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import {
  StyledCol,
  StyledHeading,
  StyledFormContainer,
  StyledFormGroup,
  StyledFormLabel,
  StyledFormControl,
} from '../styled/RegistrationBodyStyles'

const RegistrationBody: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('This field is required'),
  })

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      setTimeout(() => {
        console.log(values)
        setIsSuccess(true)
        resetForm()
      }, 500)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCloseModal = () => {
    setIsSuccess(false)
    setTimeout(() => {
      navigate('/login')
    }, 500)
  }

  return (
    <Row>
      <StyledFormContainer>
        <StyledCol xs={12} md={6}>
          <StyledHeading>Registration Form</StyledHeading>
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isValid }: any) => (
              <Form>
                <StyledFormGroup>
                  <StyledFormLabel>Email address</StyledFormLabel>
                  <Field
                    name='email'
                    as={StyledFormControl}
                    type='email'
                    placeholder='Email address'
                  />
                  <ErrorMessage name='email' component='div' />
                </StyledFormGroup>
                <StyledFormGroup>
                  <StyledFormLabel>First name</StyledFormLabel>
                  <Field
                    name='firstName'
                    as={StyledFormControl}
                    placeholder='First name'
                  />
                  <ErrorMessage name='firstName' component='div' />
                </StyledFormGroup>
                <StyledFormGroup>
                  <StyledFormLabel>Last name</StyledFormLabel>
                  <Field
                    name='lastName'
                    as={StyledFormControl}
                    placeholder='Last name'
                  />
                  <ErrorMessage name='lastName' component='div' />
                </StyledFormGroup>
                <StyledFormGroup>
                  <StyledFormLabel>Password</StyledFormLabel>
                  <Field
                    name='password'
                    as={StyledFormControl}
                    type='password'
                    placeholder='Password'
                  />
                  <ErrorMessage name='password' component='div' />
                </StyledFormGroup>
                <StyledFormGroup>
                  <StyledFormLabel>Confirm Password:</StyledFormLabel>
                  <Field
                    name='confirmPassword'
                    as={StyledFormControl}
                    type='password'
                    placeholder='Confirm Password'
                  />
                  <ErrorMessage name='confirmPassword' component='div' />
                </StyledFormGroup>
                <Button type='submit' disabled={!isValid}>
                  Registration
                </Button>
              </Form>
            )}
          </Formik>
          <Modal show={isSuccess} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your registration was successful.</Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </StyledCol>
      </StyledFormContainer>
    </Row>
  )
}

export default RegistrationBody
