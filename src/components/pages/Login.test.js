import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import wrapComponentInAllProviders from '../../test/wrapComponentInAllProviders';
import Login from './Login';

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
