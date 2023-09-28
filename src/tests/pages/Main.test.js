import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

<<<<<<<< HEAD:src/tests/components/pages/Main.test.js
import Main from '../../../components/pages/Main';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';


describe('Main Component', () => {
    it('should render main page', async () => {
========
import wrapComponentInAllProviders from '../../tests/helpers/wrapComponentInAllProviders';
import Main from '../../pages/Main';

describe('Main Component', () => {
    it('should renders main page', async () => {
>>>>>>>> origin/newTest:src/tests/pages/Main.test.js
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
