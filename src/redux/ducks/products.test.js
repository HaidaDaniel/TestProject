import { call, put } from 'redux-saga/effects';

import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsSaga
} from './products';
import productsReducer from './products';
import { fetchProducts } from '../../api'


describe('fetchProductsRequest action creator', () => {
    it('creates a FETCH_PRODUCTS_REQUEST action', () => {
        const action = fetchProductsRequest();
        expect(action).toEqual({
            type: 'FETCH_PRODUCTS_REQUEST',
        });
    });
});

describe('productsReducer handles FETCH_PRODUCTS_REQUEST', () => {
    it('updates the state correctly when handling FETCH_PRODUCTS_REQUEST', () => {
        const initialState = { products: null, loading: false, error: null };
        const action = { type: 'FETCH_PRODUCTS_REQUEST' };
        const nextState = productsReducer(initialState, action);
        expect(nextState).toEqual({ products: null, loading: true, error: null });
    });
});

describe('fetchProductsSaga handles successful product fetch', () => {
    it('correctly handles a successful product fetch', () => {
        const generator = fetchProductsSaga();

        expect(generator.next().value).toEqual(call(fetchProducts));

        const productData = [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }];
        expect(generator.next(productData).value).toEqual(put(fetchProductsSuccess(productData)));

        expect(generator.next().done).toBe(true);
    });
});

describe('initial state of productsReducer', () => {
    it('has the correct initial state', () => {
        const initialState = productsReducer(undefined, {});
        expect(initialState).toEqual({
            products: null,
            loading: false,
            error: null,
        });
    });
});