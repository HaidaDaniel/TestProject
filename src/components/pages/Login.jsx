/** @format */
import { Container, Row, Col } from 'react-bootstrap'

import { Header, LoginBody } from '../index'

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
