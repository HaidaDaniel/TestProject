/** @format */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

import { RatingStars } from './index'

import {
  StyledFormGroup,
  StyledFormLabel,
  StyledTextArea,
} from '../styled/CommentInputStyles'
import { postReview } from '../api'

function CommentInput({ productId }) {
  const [rating, setRating] = useState(null)
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      productId,
      rating,
      text,
    };

    const resultMessage = await postReview(data);

    setModalMessage(resultMessage);
    setShowModal(true);
    setRating(null);
    setText('');
  };

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledFormLabel>
            Review
            <RatingStars isInput onRatingChange={setRating} />
            <Button type='submit'>Send</Button>
          </StyledFormLabel>
          <StyledTextArea>
            <Form.Control
              as='textarea'
              placeholder='Enter review here ...'
              rows={3}
            />
          </StyledTextArea>
        </StyledFormGroup>
      </Form>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Review Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CommentInput

CommentInput.propTypes = {
  productId: PropTypes.string.isRequired,
}
