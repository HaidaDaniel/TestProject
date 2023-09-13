export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
});

export const fetchProductSuccess = (data) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: data,
});

export const fetchProductFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});