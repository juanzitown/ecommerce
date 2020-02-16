import { createStore, combineReducers } from 'redux';
import RouteReducer from './route';
import AuthReducer from './auth';
import ProductReducer from './product';

const rootReducer = combineReducers({
    routeReducer: RouteReducer,
    authReducer: AuthReducer,
    productReducer: ProductReducer,
});

const store = createStore( rootReducer );

export default store;