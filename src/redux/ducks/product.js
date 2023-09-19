import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchProductById } from '../../api';

// Actions
export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

// Reducer
const initialState = {
    product: null,
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                product: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

// Action creators
export function fetchProductRequest(id) {
    return { type: FETCH_PRODUCT_REQUEST, id };
}

export function fetchProductSuccess(data) {
    return { type: FETCH_PRODUCT_SUCCESS, payload: data };
}

export function fetchProductFailure(error) {
    return { type: FETCH_PRODUCT_FAILURE, payload: error };
}

//Sagas 
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
;

