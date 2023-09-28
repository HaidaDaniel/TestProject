import { render, waitFor, screen } from '@testing-library/react';

import ProductsGrid from '../../components/ProductsGrid';
<<<<<<< HEAD

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('should render products correctly', async () => {
=======
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('should renders products correctly', async () => {
>>>>>>> origin/newTest
        render(wrapComponentInAllProviders(<ProductsGrid />));

        await waitFor(() => {
            const productItems = screen.getAllByTestId('product-item');
            expect(productItems.length).toBe(20);
        });
        expect(document.body).toMatchSnapshot();
    });
});
