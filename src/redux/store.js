import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { authRootSaga, deAuthRootSaga } from './ducks/auth';
import { productRootSaga } from './ducks/product';
import { productsRootSaga } from './ducks/products';


const rootSagas = [authRootSaga, deAuthRootSaga, productsRootSaga, productRootSaga]

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)));

rootSagas.forEach((saga) => sagaMiddleware.run(saga));

export default store
    ;