import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';
import authReducer from './auth';


const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    auth: authReducer,
});

export default rootReducer;

