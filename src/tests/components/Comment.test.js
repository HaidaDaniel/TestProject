import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import theme from '../../theme';
import Comment from '../../components/Comment';

describe('Comment Component', () => {
    it('renders comment details correctly', () => {
        const comment = {
            author: 'John',
            text: 'Test comment',
            rating: 5,
        };

        render(
            <ThemeProvider theme={theme}>
                <Comment
                    author={comment.author}
                    text={comment.text}
                    rating={comment.rating}

                /></ThemeProvider>
        );


        expect(screen.getByText((content, element) => {

            return content.includes('author:') && content.includes('John');
        })).toBeInTheDocument();
        expect(screen.getByText((content, element) => {

            return content.includes('review id');
        })).toBeInTheDocument();
        expect(screen.getByText(comment.text)).toBeInTheDocument();

        expect(document.body).toMatchSnapshot();

    });
});
