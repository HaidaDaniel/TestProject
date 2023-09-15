import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';
import authReducer from './auth';
import { productRootSaga, productsRootSaga } from './rootSaga';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    auth: authReducer,
});

export default rootReducer;

export const rootSagas = [productsRootSaga, productRootSaga];