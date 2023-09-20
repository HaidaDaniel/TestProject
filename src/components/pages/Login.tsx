/** @format */
import { Container, Row, Col } from 'react-bootstrap'

import { Header, LoginBody } from '../index'

const Login = () => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        <LoginBody />
      </Col>
    </Row>
  </Container>
)

export default Login

Login.propTypes = {}