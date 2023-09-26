import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RatingStars from '../../components/RatingStars';
<<<<<<< HEAD
<<<<<<< HEAD

import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RatingStars Component', () => {
    it('should render stars based on the rating', () => {
=======
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RatingStars Component', () => {
    it('should renders stars based on the rating', () => {
>>>>>>> origin/newTest
=======
import wrapComponentInAllProviders from '../helpers/wrapComponentInAllProviders';

describe('RatingStars Component', () => {
    it('should renders stars based on the rating', () => {
>>>>>>> cdcb47e (1st refactor of tests description)
        render(
            wrapComponentInAllProviders(<RatingStars rating={3.5} isInput={false} />));
        debugger
        expect(screen.queryAllByTestId('filled').length).toBe(3);
        expect(screen.queryAllByTestId('half-filled').length).toBe(1);
        expect(screen.queryAllByTestId('empty').length).toBe(1);
    });
});

<<<<<<< HEAD
<<<<<<< HEAD
it('should handle input and rating output change', () => {
=======
it('should handles input and rating output change', () => {
>>>>>>> origin/newTest
=======
it('should handles input and rating output change', () => {
>>>>>>> cdcb47e (1st refactor of tests description)
    let currentRating = 0;

    const handleRatingChange = (newRating) => {
        currentRating = newRating;
    };

    render(wrapComponentInAllProviders(<RatingStars isInput={true} onRatingChange={handleRatingChange} />));

    const inputElement = screen.getByRole('spinbutton');

    fireEvent.change(inputElement, { target: { value: '4' } });

    fireEvent.blur(inputElement);

    expect(currentRating).toBe(4);
});

