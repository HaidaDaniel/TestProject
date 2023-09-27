import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductPageBody from '../../components/ProductPageBody';

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductPageBody Component', () => {

    it('should render product information correctly', () => {
        const product = {
            id: 1,
            title: 'Product Title',
            price: 19.99,
            description: 'Product Description',
            rating: { rate: 4.5 },
            image: 'product-image-url.jpg',
            comments: [{
                commentId: 1,
                author: 'John Doe',
                text: 'Great product!',
                rating: 5,
            }],
        };

        render(
            wrapComponentInAllProviders(<ProductPageBody {...product} />)
        );

        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(screen.getByText(`Price: ${product.price} usd`)).toBeInTheDocument();
        expect(screen.getByText('Description:')).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(screen.getByText(product.comments[0].text)).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });

    it('should render comment input if user is logged in', () => {
        const product = {
            id: 1,
            title: 'Product Title',
            price: 19.99,
            description: 'Product Description',
            rating: { rate: 4.5 },
            image: 'product-image-url.jpg',
            comments: [],
        };

        const modifiedInitialState = {
            auth: {
                user: { id: 123, username: 'testuser' },
            },
        };

        render(
            wrapComponentInAllProviders(<ProductPageBody {...product} />, modifiedInitialState)
        );

        expect(screen.getByPlaceholderText('Enter review here ...')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });

    it('should render login message if user is not logged in', () => {
        const product = {
            id: 1,
            title: 'Product Title',
            price: 19.99,
            description: 'Product Description',
            rating: { rate: 4.5 },
            image: 'product-image-url.jpg',
            comments: [],
        };

        render(
            wrapComponentInAllProviders(<ProductPageBody {...product} />)
        );

        expect(screen.getByText('Login please to make a review')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });
});
