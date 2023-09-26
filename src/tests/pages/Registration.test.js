import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

<<<<<<< HEAD
<<<<<<<< HEAD:src/tests/components/pages/Registration.test.js
import Registration from '../../../components/pages/Registration';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';


describe('Registration Component', () => {
    it('should render registration page', () => {
========
=======
>>>>>>> cdcb47e (1st refactor of tests description)
import wrapComponentInAllProviders from '../../tests/helpers/wrapComponentInAllProviders';
import Registration from '../../pages/Registration';

describe('Registration Component', () => {
    it('should renders registration page', () => {
<<<<<<< HEAD
>>>>>>>> origin/newTest:src/tests/pages/Registration.test.js
=======
>>>>>>> cdcb47e (1st refactor of tests description)
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
