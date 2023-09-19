import { combineReducers } from 'redux';
import productsReducer from './ducks/products';
import productReducer from './ducks/product';
import authReducer from './ducks/auth';


const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    auth: authReducer,
});

export default rootReducer
    ;

