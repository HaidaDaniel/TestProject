/** @format */
import { detailedProductShape } from './PropTypes/DetailedProductShape'
import { Row, Col } from 'react-bootstrap'
import CommentInput from './CommentInput'
import CommentsBlock from './ComentsBlock'
import RatingStars from './RatingStars'
import { StyledImgOfProduct } from './styled/ProductPageBodyStyled'

function ProductPageBody({ data }) {
  return (
    <div>
      <Row className='mt-6'>
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
              <p>Price:{' ' + data.price + ' '}usd</p>
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
            <CommentInput productId={data.id} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ProductPageBody

ProductPageBody.propTypes = {
  data: detailedProductShape.isRequired,
}
