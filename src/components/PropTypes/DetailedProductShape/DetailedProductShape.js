import PropTypes from 'prop-types';

export const commentShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
});

export const ratingShape = PropTypes.shape({
  rate: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
});

export const detailedProductShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: ratingShape.isRequired,
  comments: PropTypes.arrayOf(commentShape).isRequired,
});