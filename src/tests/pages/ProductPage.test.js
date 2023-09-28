import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

<<<<<<<< HEAD:src/tests/components/pages/ProductPage.test.js
import ProductPage from '../../../components/pages/ProductPage';

import theme from '../../../theme';
import store from '../../../redux/store';


describe('ProductPage Component', () => {
    it('should render ProductPage page', async () => {
========
import theme from '../../theme';
import store from '../../redux/store';
import ProductPage from '../../pages/ProductPage';

describe('ProductPage Component', () => {
    it('should renders ProductPage page', async () => {
>>>>>>>> origin/newTest:src/tests/pages/ProductPage.test.js
        const productId = '1';

        render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <MemoryRouter initialEntries={[`/products/${productId}`]}>
                        <Routes>
                            <Route path='/products/:productId' element={<ProductPage />} /></Routes>
                    </MemoryRouter>

                </ThemeProvider>
            </Provider>
        );
        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();

        await waitFor(() => {

            const productItemElement = screen.getByTestId('product-page-body');
            expect(productItemElement).toBeInTheDocument();

        });
        expect(document.body).toMatchSnapshot();

    });

});

