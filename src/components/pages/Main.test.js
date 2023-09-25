import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import wrapComponentInAllProviders from '../../test/wrapComponentInAllProviders';
import Main from './Main';

describe('Main Component', () => {
    it('renders main page', async () => {
        render(wrapComponentInAllProviders(<Main />));

        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();


        await waitFor(() => {

            const productItemElement = screen.getAllByTestId("product-item");
            expect(productItemElement.length).toBe(20);


        });

        expect(document.body).toMatchSnapshot();
    });
});