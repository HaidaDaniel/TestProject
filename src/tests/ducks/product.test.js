import { call, put } from 'redux-saga/effects';

import {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductSaga,
} from '../../redux/ducks/product';
import productReducer from '../../redux/ducks/product';
import { fetchProductById } from '../../api';

describe('fetchProductRequest action creator', () => {
    it('should create a FETCH_PRODUCT_REQUEST action with the correct payload', () => {
        const productId = '1';
        const action = fetchProductRequest(productId);
        expect(action).toEqual({
            type: 'FETCH_PRODUCT_REQUEST',
            id: productId,
        });
    });
});

describe('productReducer handles FETCH_PRODUCT_REQUEST', () => {
    it('should update the state correctly when handling FETCH_PRODUCT_REQUEST', () => {
        const initialState = { product: null, loading: false, error: null };
        const action = { type: 'FETCH_PRODUCT_REQUEST' };
        const nextState = productReducer(initialState, action);
        expect(nextState).toEqual({ product: null, loading: true, error: null });
    });
});

describe('fetchProductSaga handles successful product fetch', () => {
    it('should correctly handle a successful product fetch', () => {
        const action = { type: 'FETCH_PRODUCT_REQUEST', id: '1' };
        const generator = fetchProductSaga(action);

        expect(generator.next().value).toEqual(call(fetchProductById, action.id));

        const productData = { id: '1', name: 'Product Name' };
        expect(generator.next(productData).value).toEqual(put(fetchProductSuccess(productData)));

        expect(generator.next().done).toBe(true);
    });
});

describe('initial state of productReducer', () => {
    it('should has the correct initial state', () => {
        const initialState = productReducer(undefined, {});
        expect(initialState).toEqual({
            product: null,
            loading: false,
            error: null,
        });
    });
});
