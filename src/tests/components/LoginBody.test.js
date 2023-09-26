import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginBody from '../../components/LoginBody';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/newTest
=======
>>>>>>> cdcb47e (1st refactor of tests description)
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';
import store from '../../redux/store';

describe('LoginBody component', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    it('should render login form', () => {
=======
    it('should renders login form', () => {
>>>>>>> origin/newTest
=======
    it('should renders login form', () => {
>>>>>>> cdcb47e (1st refactor of tests description)
        render(
            wrapComponentInAllProviders(<LoginBody />)
        );

        expect(screen.getByText('Email address')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(document.body).toMatchSnapshot();
    });

<<<<<<< HEAD
<<<<<<< HEAD
    it('should handle form submission', async () => {
=======
    it('should handles form submission', async () => {
>>>>>>> origin/newTest
=======
    it('should handles form submission', async () => {
>>>>>>> cdcb47e (1st refactor of tests description)


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
