import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginBody from './LoginBody';
import wrapComponentInAllProviders from '../test/wrapComponentInAllProviders';
import store from '../redux/store';

describe('LoginBody component', () => {
    it('renders login form', () => {
        render(
            wrapComponentInAllProviders(<LoginBody />)
        );

        expect(screen.getByText('Email address')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });

    it('handles form submission', async () => {


        render(
            wrapComponentInAllProviders(<LoginBody />))

        const emailInput = screen.getByPlaceholderText('Email address');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByRole('button');

        await (async () => {
            fireEvent.change(emailInput, { target: { value: 'demo@demo.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(loginButton);
            expect(document.body).toMatchSnapshot();
        });

        setTimeout(() => {
            const state = store.getState();
            expect(state.auth.user.email).toBe('demo@demo.com');
        }, 1000)
        clearTimeout();

    });
});
