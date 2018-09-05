import { applyMiddleware, combineReducers, createStore } from 'redux';
import { default as thunk } from 'redux-thunk';

import * as appReducer from '../reducers';
import composeEnhancer from '../reducers/composeEnhancer';

export default (reducer: {}, preloadedState: {}, middleware: any[]) =>
  createStore(
    combineReducers({
      ...appReducer,
      ...reducer,
    }),
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, ...middleware))
  );
