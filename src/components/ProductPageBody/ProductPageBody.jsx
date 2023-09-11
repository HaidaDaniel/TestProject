/** @format */
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import useSavedData from '../hooks/useSavedData/useSavedData'
import CommentInput from '../CommentInput/CommentInput'
import CommentsBlock from '../CommentsBlock/ComentsBlock'
import RatingStars from '../RatingStars/RatingStars'
import './index.css'

function ProductPageBody({ data }) {
  const { getSavedData, setSavedData } = useSavedData(data)
  const savedData = getSavedData()

  return (
    <>
      <Row className='mt-6'>
        <Col md='6' xs='12' className=''>
          {data && (
            <img
              variant='top'
              src={savedData.image}
              alt={savedData.category}
              className='col-left'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </Col>
        <Col md='6' xs='12' className='col-right mt-3'>
          <Row className='mb-3'>
            <h3>{savedData.category}</h3>
          </Row>
          <Row className='align-items-center mb-3'>
            <Col xs='auto'>
              <RatingStars rating={savedData.rating.rate} isInput={false} />
            </Col>
            <Col xs='auto' className='ml-auto my-auto'>
              <p>Price:{' ' + savedData.price + ' '}usd</p>
            </Col>
          </Row>
          <Row>
            <h5>Description:</h5>
          </Row>
          <Row className='mb-3'>{savedData.description}</Row>
          <Row className='mb-3 border-top'>
            {savedData.comments && (
              <CommentsBlock comments={savedData.comments} />
            )}
          </Row>
          <Row className='border-top pt-3 mb-3'>
            <CommentInput />
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default ProductPageBody
