import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductItem from './ProductItem';
import wrapComponentInAllProviders from '../test/wrapComponentInAllProviders';

const sampleProduct = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
};

describe('ProductItem Component', () => {
    it('renders product correctly', () => {
        render(wrapComponentInAllProviders(<ProductItem product={sampleProduct} />));

        expect(screen.getByTestId('product-item')).toBeInTheDocument();
        expect(screen.getByAltText(sampleProduct.title)).toBeInTheDocument();
        expect(screen.getByText(sampleProduct.title)).toBeInTheDocument();
        expect(screen.getByText(`${sampleProduct.rating.count} orders`)).toBeInTheDocument();
        expect(screen.getByText(`Price: ${sampleProduct.price}usd`)).toBeInTheDocument();
        expect(screen.getByText('Get details')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });
});
