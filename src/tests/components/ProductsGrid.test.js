import { render, waitFor, screen } from '@testing-library/react';

import ProductsGrid from '../../components/ProductsGrid';

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('should render products correctly', async () => {
        render(wrapComponentInAllProviders(<ProductsGrid />));

        await waitFor(() => {
            const productItems = screen.getAllByTestId('product-item');
            expect(productItems.length).toBe(20);
        });
        expect(document.body).toMatchSnapshot();
    });
});
