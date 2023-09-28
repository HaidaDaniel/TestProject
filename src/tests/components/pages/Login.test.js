import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Login from '../../../components/pages/Login';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';


describe('Login Component', () => {
    it('should render login page', () => {
        render(wrapComponentInAllProviders(<Login />));
        expect(document.body).toMatchSnapshot();

        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();
        const loginElement = screen.getByTestId('login col');
        expect(loginElement).toBeInTheDocument();

    });
});
