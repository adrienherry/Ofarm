import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import debugMiddleware from './middlewares/debug';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [debugMiddleware];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducer, enhancers);

export default store;
