import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchProducts, fetchProductById } from '../api';
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from './products';
import { FETCH_PRODUCT_REQUEST, fetchProductSuccess, fetchProductFailure } from './product';
import {
    LOGIN_REQUEST,
    loginSuccess,
    loginFailure,
    logout,
    LOGOUT
} from './auth';

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

const fakeLoginAPI = (credentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email === 'demo@demo.com' && credentials.password === 'password') {
                resolve('demo@demo.com');
            } else {
                reject({ message: 'Invalid credentials' });
            }
        }, 500);
    });
};

function* loginSaga(action) {
    try {
        const user = yield call(fakeLoginAPI, action.payload);
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}



export function* authRootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);

}


function* logoutSaga() {

    yield put(logout());
}

export function* deAuthRootSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
}



export const rootSagas = [productsRootSaga, productRootSaga, authRootSaga, deAuthRootSaga];