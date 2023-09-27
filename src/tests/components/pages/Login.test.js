import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';
import Login from '../../../components/pages/Login';

describe('Login Component', () => {
    it('renders login page', () => {
        render(wrapComponentInAllProviders(<Login />));
        expect(document.body).toMatchSnapshot();

        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();
        const loginElement = screen.getByTestId('login col');
        expect(loginElement).toBeInTheDocument();

    });
});
