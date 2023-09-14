import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';
import { productRootSaga, productsRootSaga } from './rootSaga';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
});

export default rootReducer;

export const rootSagas = [productsRootSaga, productRootSaga];