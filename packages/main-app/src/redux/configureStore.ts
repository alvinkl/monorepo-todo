import { applyMiddleware, combineReducers, createStore } from 'redux';
import { default as thunk } from 'redux-thunk';

import * as allReducers from './allReducers';
import composeEnhancer from './composeEnhancer';

export default (reducer: {}, preloadedState: {}, middleware: any[]) =>
  createStore(
    combineReducers({
      ...allReducers,
      ...reducer,
    }),
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, ...middleware))
  );
