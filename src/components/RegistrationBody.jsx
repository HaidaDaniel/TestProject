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
} from './styled/RegistrationBodyStyles'

function RegistrationBody() {
  return (
    <Row>
      <StyledForm>
        <StyledCol xs={12} md={6}>
          <StyledHeading>Registration Form</StyledHeading>
          <StyledFormGroup controlId='formGroupEmail'>
            <StyledFormLabel>Email address</StyledFormLabel>
            <StyledFormControl type='email' placeholder='Email address' />
          </StyledFormGroup>
          <StyledFormGroup controlId='formGroupFirstName'>
            <StyledFormLabel>First name</StyledFormLabel>
            <StyledFormControl placeholder='First name' />
          </StyledFormGroup>
          <StyledFormGroup controlId='formGroupLastName'>
            <StyledFormLabel>LastName</StyledFormLabel>
            <StyledFormControl placeholder='LastName' />
          </StyledFormGroup>
          <StyledFormGroup controlId='formGroupPassword'>
            <StyledFormLabel>Password</StyledFormLabel>
            <StyledFormControl type='password' placeholder='Password' />
          </StyledFormGroup>
          <StyledSubmitButton variant='primary' type='submit'>
            Registration
          </StyledSubmitButton>
        </StyledCol>
      </StyledForm>
    </Row>
  )
}

export default RegistrationBody
