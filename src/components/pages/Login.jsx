/** @format */
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../Header'
import LoginBody from '../LoginBody'

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <LoginBody></LoginBody>
        </Col>
      </Row>
    </Container>
  )
}
export default Login

Login.propTypes = {}
