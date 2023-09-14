/** @format */
import { Row } from 'react-bootstrap'
import {
  StyledForm,
  StyledCol,
  StyledHeading,
  StyledFormGroup,
  StyledFormLabel,
  StyledFormControl,
  StyledSubmitButton,
} from '../styled/LoginBodyStyles'

function LoginBody() {
  return (
    <Row>
      <StyledForm className='pt-3'>
        <StyledCol xs={12} md={6}>
          <StyledHeading>Login</StyledHeading>
          <StyledFormGroup>
            <StyledFormLabel>Email address</StyledFormLabel>
            <StyledFormControl type='email' placeholder='Email address' />
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledFormLabel>Password</StyledFormLabel>
            <StyledFormControl type='password' placeholder='Password' />
          </StyledFormGroup>
          <StyledSubmitButton variant='primary' type='submit'>
            Login
          </StyledSubmitButton>
        </StyledCol>
      </StyledForm>
    </Row>
  )
}

export default LoginBody
