/** @format */
import Header from '../Header'
import { Container } from 'react-bootstrap'
import LoginBody from '../LoginBody'

function Login() {
  return (
    <Container>
      <Header></Header>
      <LoginBody></LoginBody>
    </Container>
  )
}
export default Login

Login.propTypes = {}
