import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import debugMiddleware from './middlewares/debug';
import speciesMiddleware from './middlewares/species';
import registerMiddleware from './middlewares/register';
import authMiddleware from './middlewares/auth';
import isConnectedMiddleware from './middlewares/isConnected';
import searchbarMiddleware from './middlewares/searchbar';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  debugMiddleware,
  speciesMiddleware,
  registerMiddleware,
  authMiddleware,
  isConnectedMiddleware,
  searchbarMiddleware,
];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
