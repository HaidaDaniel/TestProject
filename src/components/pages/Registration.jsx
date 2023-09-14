/** @format */
import { Container, Row, Col } from 'react-bootstrap'

import { RegistrationBody, Header } from '../index'

function Registration() {
  return (
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
}
export default Registration

Registration.propTypes = {}
