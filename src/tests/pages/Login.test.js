import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
<<<<<<<< HEAD:src/tests/components/pages/Login.test.js

import Login from '../../../components/pages/Login';

import wrapComponentInAllProviders from '../../helpers/wrapComponentInAllProviders';


describe('Login Component', () => {
    it('should render login page', () => {
========
import wrapComponentInAllProviders from '../../tests/helpers/wrapComponentInAllProviders';
import Login from '../../pages/Login';

describe('Login Component', () => {
    it('should renders login page', () => {
>>>>>>>> origin/newTest:src/tests/pages/Login.test.js
        render(wrapComponentInAllProviders(<Login />));
        expect(document.body).toMatchSnapshot();

        const headerElement = screen.getByText('Shop');
        expect(headerElement).toBeInTheDocument();
        const loginElement = screen.getByTestId('login col');
        expect(loginElement).toBeInTheDocument();

    });
});
