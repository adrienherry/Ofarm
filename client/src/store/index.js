import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import debugMiddleware from './middlewares/debug';
import speciesMiddleware from './middlewares/species';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [debugMiddleware, speciesMiddleware];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
