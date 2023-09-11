/** @format */
import Header from '../../Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import RegistrationBody from '../../RegistrationBody/RegistrationBody'

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
