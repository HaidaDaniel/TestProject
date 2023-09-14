// Actions
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Reducer
const initialState = {
    products: [],
    loading: false,
    error: null,
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

// Action creators
export function fetchProductsRequest() {
    return { type: FETCH_PRODUCTS_REQUEST };
}

export function fetchProductsSuccess(data) {
    return { type: FETCH_PRODUCTS_SUCCESS, payload: data };
}

export function fetchProductsFailure(error) {
    return { type: FETCH_PRODUCTS_FAILURE, payload: error };
}