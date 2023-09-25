import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import wrapComponentInAllProviders from '../../test/wrapComponentInAllProviders';
import Registration from './Registration';

describe('Registration Component', () => {
    it('renders registration page', () => {
        render(
            wrapComponentInAllProviders(
                <Registration />));

        expect(document.body).toMatchSnapshot();

        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();

        const registrationBodyElement = screen.getByText('Registration Form');
        expect(registrationBodyElement).toBeInTheDocument();

    });
});
