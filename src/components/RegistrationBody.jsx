/** @format */

import { Row } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  StyledCol,
  StyledHeading,
  StyledFormContainer,
  StyledFormGroup,
  StyledFormLabel,
  StyledFormControl,
  StyledSubmitButton,
} from '../styled/RegistrationBodyStyles'

function RegistrationBody() {
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
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('This field is required'),
  })

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
            onSubmit={(values) => {
              console.log(values)
            }}>
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
              <StyledSubmitButton variant='primary' type='submit'>
                Registration
              </StyledSubmitButton>
            </Form>
          </Formik>
        </StyledCol>
      </StyledFormContainer>
    </Row>
  )
}

export default RegistrationBody
