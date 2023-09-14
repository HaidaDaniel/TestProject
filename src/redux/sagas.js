import { call, put, takeEvery } from 'redux-saga/effects';
import {
    FETCH_PRODUCTS,
    fetchProductSuccess,
    fetchProductFailure,
} from './products';
import { fetchProducts } from '../api';

function* fetchProductsSaga() {
    try {
        const data = yield call(fetchProducts);
        yield put(fetchProductSuccess(data));
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}

function* rootProductsSaga() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
}

export default rootProductsSaga;