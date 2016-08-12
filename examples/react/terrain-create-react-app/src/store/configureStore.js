import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from './initialState';

const store = applyMiddleware(thunk)(createStore);

export default function () {
  return store(rootReducer, initialState);
}

/**
 * Based on the current environment variable, we need to make sure
 * to exclude any DevTools-related code from the production builds.
 * The code is envify'd - using 'DefinePlugin' in Webpack.
 */

 /*

let loadedStore = null;

if (process.env.NODE_ENV === 'production') {
  loadedStore = require('./configureStore.prod');
} else {
  loadedStore = require('./configureStore.dev');
}

export const configureStore = loadedStore;
*/