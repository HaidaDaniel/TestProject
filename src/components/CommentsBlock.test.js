import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import theme from '../theme';
import CommentsBlock from './CommentsBlock';

const mockedComments = [
    {
        commentId: 1,
        author: 'John Doe',
        text: 'Great product!',
        rating: 5,
    },
    {
        commentId: 2,
        author: 'Jane Smith',
        text: 'Could be better.',
        rating: 3,
    },
];

test('renders CommentsBlock component with comments', () => {
    render(<ThemeProvider theme={theme}><CommentsBlock comments={mockedComments} /></ThemeProvider>);

    const commentBlockElement = screen.getByTestId('comments-block');
    const commentElements = screen.getAllByTestId('comment');

    expect(commentBlockElement).toBeInTheDocument();
    expect(commentElements.length).toBe(mockedComments.length);

    mockedComments.forEach((comment, index) => {
        const commentElement = commentElements[index];
        expect(commentElement).toHaveTextContent(comment.text);
        expect(commentElement).toHaveTextContent(comment.author);
        expect(commentElement).toHaveTextContent(`★★★★★${comment.rating} /5`);
        expect(document.body).toMatchSnapshot();
    });
});

test('renders CommentsBlock component with no comments', () => {
    render(<ThemeProvider theme={theme}><CommentsBlock comments={[]} /></ThemeProvider>);

    const commentBlockElement = screen.getByTestId('comments-block');
    const noCommentsMessage = screen.getByText('No review available.Be the first reviewer!');

    expect(commentBlockElement).toBeInTheDocument();
    expect(noCommentsMessage).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
});
