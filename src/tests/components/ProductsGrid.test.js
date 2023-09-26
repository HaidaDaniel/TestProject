import { render, waitFor, screen } from '@testing-library/react';

import ProductsGrid from '../../components/ProductsGrid';
<<<<<<< HEAD
<<<<<<< HEAD

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('should render products correctly', async () => {
=======
=======
>>>>>>> cdcb47e (1st refactor of tests description)
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('ProductsGrid Component', () => {
    it('should renders products correctly', async () => {
<<<<<<< HEAD
>>>>>>> origin/newTest
        render(wrapComponentInAllProviders(<ProductsGrid />));

        await waitFor(() => {
            const productItems = screen.getAllByTestId('product-item');
            expect(productItems.length).toBe(20);
=======
        render(wrapComponentInAllProviders(<ProductsGrid />));

        await waitFor(() => {

            const productItems = screen.getAllByTestId('product-item');
            expect(productItems.length).toBe(20);

>>>>>>> cdcb47e (1st refactor of tests description)
        });
        expect(document.body).toMatchSnapshot();
    });
});
