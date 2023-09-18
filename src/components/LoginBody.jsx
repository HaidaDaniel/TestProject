/** @format */
import { Row } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { loginRequest } from '../redux/auth'
import {
  StyledFormContainer,
  StyledCol,
  StyledHeading,
  StyledFormGroup,
  StyledFormLabel,
  StyledFormControl,
  StyledSubmitButton,
} from '../styled/LoginBodyStyles'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
})

function LoginBody() {
  const dispatch = useDispatch()

  const handleSubmitForm = (values) => {
    dispatch(loginRequest(values))
  }

  return (
    <Row>
      <StyledFormContainer>
        <StyledCol xs={12} md={6}>
          <StyledHeading>Login</StyledHeading>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}>
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
                <StyledFormLabel>Password</StyledFormLabel>
                <Field
                  name='password'
                  as={StyledFormControl}
                  type='password'
                  placeholder='Password'
                />
                <ErrorMessage name='password' component='div' />
              </StyledFormGroup>
              <StyledSubmitButton variant='primary' type='submit'>
                Login
              </StyledSubmitButton>
            </Form>
          </Formik>
        </StyledCol>
      </StyledFormContainer>
    </Row>
  )
}

export default LoginBody

LoginBody.propTypes = {}
