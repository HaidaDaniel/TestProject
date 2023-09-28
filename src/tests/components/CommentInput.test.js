import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

<<<<<<< HEAD
import CommentInput from '../../components/CommentInput';

import theme from '../../theme';
import { postReview } from '../../api';

=======
import theme from '../../theme';
import CommentInput from '../../components/CommentInput';
import { postReview } from '../../api';

>>>>>>> origin/newTest
jest.mock('../../api', () => ({
  postReview: jest.fn(() => Promise.resolve('Review posted successfully')),
}));

describe('CommentInput Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

<<<<<<< HEAD
  it('should render CommentInput component', () => {
=======
  it('should renders CommentInput component', () => {
>>>>>>> origin/newTest
    render(<ThemeProvider theme={theme}><CommentInput productId={1} /></ThemeProvider>);
    const reviewText = screen.getByPlaceholderText('Enter review here ...');
    const sendButton = screen.getByText('Send');

    expect(reviewText).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

<<<<<<< HEAD
  it('should handle form submission', async () => {
=======
  it('should handles form submission', async () => {
>>>>>>> origin/newTest
    render(<ThemeProvider theme={theme}><CommentInput productId={1} /></ThemeProvider>);
    const reviewText = screen.getByPlaceholderText('Enter review here ...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(reviewText, { target: { value: 'Test review' } });
    fireEvent.click(sendButton);

    expect(postReview).toHaveBeenCalledWith({
      productId: 1,
      rating: 1,
      text: 'Test review',
    });

    const modal = await screen.findByText('Review Status', { exact: false });
    expect(modal).toBeVisible();

    expect(document.body).toMatchSnapshot();

  });
});
