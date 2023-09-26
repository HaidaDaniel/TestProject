import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
<<<<<<< HEAD
<<<<<<< HEAD

import RegistrationBody from '../../components/RegistrationBody';

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RegistrationBody Component', () => {
    it('should handle form submission and success modal', async () => {
=======
import RegistrationBody from '../../components/RegistrationBody';
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RegistrationBody Component', () => {
    it('should handles form submission and success modal', async () => {
>>>>>>> origin/newTest
=======
import RegistrationBody from '../../components/RegistrationBody';
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RegistrationBody Component', () => {
    it('should handles form submission and success modal', async () => {
>>>>>>> cdcb47e (1st refactor of tests description)
        render(
            wrapComponentInAllProviders(<RegistrationBody />)
        );

        fireEvent.change(screen.getByPlaceholderText('Email address'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('First name'), {
            target: { value: 'John' },
        });
        fireEvent.change(screen.getByPlaceholderText('Last name'), {
            target: { value: 'Doe' },
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), {
            target: { value: 'password123' },
        });
        fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
            target: { value: 'password123' },
        });

        fireEvent.click(screen.getByText('Registration'));

        await waitFor(() => {
            expect(screen.getByText('Your registration was successful.')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByText('Close'));

        await waitFor(() => {
            expect(screen.queryByText('Your registration was successful.')).not.toBeInTheDocument();
        });
        expect(document.body).toMatchSnapshot();
    });
});
