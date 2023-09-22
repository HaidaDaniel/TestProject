import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationBody from './RegistrationBody';
import wrapComponentInAllProviders from '../test/wrapComponentInAllProviders';

describe('RegistrationBody Component', () => {
    it('handles form submission and success modal', async () => {
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