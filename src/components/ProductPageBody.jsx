/** @format */
import { detailedProductShape } from './PropTypes/DetailedProductShape'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import CommentInput from './CommentInput'
import CommentsBlock from './CommentsBlock'
import RatingStars from './RatingStars'
import { StyledImgOfProduct } from '../styled/ProductPageBodyStyled'

function ProductPageBody({ product }) {
  const user = useSelector((state) => state.auth.user)

  const data = product

  return (
    <>
      {data && (
        <Row className='mt-3'>
          <Col md='6' xs='12' className=''>
            <StyledImgOfProduct
              src={data.image}
              alt={data.title}
              className='col-left'
              style={{ maxWidth: '100%', height: 'auto' }}></StyledImgOfProduct>
          </Col>
          <Col md='6' xs='12' className='col-right mt-3'>
            <Row className='mb-3'>
              <h3>{data.title}</h3>
            </Row>
            <Row className='align-items-center mb-3'>
              <Col xs='auto'>
                <RatingStars rating={data.rating.rate} isInput={false} />
              </Col>
              <Col xs='auto' className='ml-auto my-auto'>
                Price:{' ' + data.price + ' '}usd
              </Col>
            </Row>
            <Row>
              <h5>Description:</h5>
            </Row>
            <Row className='mb-3'>{data.description}</Row>
            <Row className='mb-3 border-top'>
              {data.comments && <CommentsBlock comments={data.comments} />}
            </Row>
            <Row className='border-top pt-3 mb-3'>
              {user !== null ? (
                <CommentInput productId={data.id} />
              ) : (
                <div>login please to make review</div>
              )}
            </Row>
          </Col>
        </Row>
      )}
    </>
  )
}
export default ProductPageBody

ProductPageBody.propTypes = {
  product: detailedProductShape.isRequired,
}
