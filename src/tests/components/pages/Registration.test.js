import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Registration from '../../../components/pages/Registration';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';


describe('Registration Component', () => {
    it('should render registration page', () => {
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
