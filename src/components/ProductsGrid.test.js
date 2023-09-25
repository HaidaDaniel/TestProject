import { render, waitFor, screen } from '@testing-library/react';

import ProductsGrid from './ProductsGrid';
import wrapComponentInAllProviders from '../test/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('renders products correctly', async () => {
        render(wrapComponentInAllProviders(<ProductsGrid />));

        await waitFor(() => {

            const productItems = screen.getAllByTestId('product-item');
            expect(productItems.length).toBe(20);

        });
        expect(document.body).toMatchSnapshot();
    });
});
