import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchProducts, fetchProductById } from '../api';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from './ducks/products';
import { FETCH_PRODUCT_REQUEST, fetchProductSuccess, fetchProductFailure } from './ducks/product';
import {
    LOGIN_REQUEST,
    loginSuccess,
    loginFailure,
    logout,
    LOGOUT
} from './ducks/auth';

function* fetchProductsSaga() {
    try {
        const data = yield call(fetchProducts);
        yield put(fetchProductsSuccess(data));

    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
}

export function* productsRootSaga() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);

}

function* fetchProductSaga(action) {
    try {
        const { id } = action;
        const data = yield call(fetchProductById, id);
        yield localStorage.setItem('product', JSON.stringify(data));
        yield put(fetchProductSuccess(data));
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}

export function* productRootSaga() {
    yield takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga);

}

// Simulated login API call

