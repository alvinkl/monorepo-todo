import { services as STodo } from '@organizations/datasource/todo';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { default as thunk } from 'redux-thunk';

import * as allReducers from './allReducers';
import composeEnhancer from './composeEnhancer';

const initService = () => {
  if (process.env.NODE_ENV !== 'production') return new STodo.TodoService();

  return new STodo.TodoService();
};

export default (preloadedState: {}) => {
  const services = {
    todo: initService(),
  };

  return createStore(
    combineReducers(allReducers),
    {
      ...preloadedState,
      services,
    },
    composeEnhancer(applyMiddleware(thunk))
  );
};
