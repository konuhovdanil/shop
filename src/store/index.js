import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import state from './state';

const store = createStore(reducer, state);
export default store;