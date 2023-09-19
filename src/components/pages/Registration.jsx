/** @format */
import { Container, Row, Col } from 'react-bootstrap'

import { RegistrationBody, Header } from '../index'

const Registration = () => (
  <Container>
    <Row>
      <Col>
        <Header></Header>
      </Col>
    </Row>
    <Row>
      <Col>
        <RegistrationBody></RegistrationBody>
      </Col>
    </Row>
  </Container>
)

export default Registration

Registration.propTypes = {}
