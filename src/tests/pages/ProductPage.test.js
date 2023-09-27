import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import store from '../../redux/store';
import ProductPage from '../../pages/ProductPage';

describe('ProductPage Component', () => {
    it('should renders ProductPage page', async () => {
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

