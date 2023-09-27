import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import wrapComponentInAllProviders from '../../tests/helpers/wrapComponentInAllProviders';
import Main from '../../pages/Main';

describe('Main Component', () => {
    it('should renders main page', async () => {
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
