import { createStore } from 'redux';
import ProductReducer from './product';

const store = createStore( ProductReducer );

export default store;