import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/Header';

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('Header component', () => {
    it('should render Header component with registration and login links when user is not authenticated', () => {
        render(wrapComponentInAllProviders(<Header />));

        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Registration')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    })
})
describe('Header component with login', () => {
    it('should render Header component without registration and login links when user is authenticated', () => {
        const initialState = {
            auth: {
                user: 'demo@demo.com',
                isLoading: false
            },
        };

        render(wrapComponentInAllProviders(<Header />, initialState));

        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.queryByText('Registration')).not.toBeInTheDocument();
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });
})
