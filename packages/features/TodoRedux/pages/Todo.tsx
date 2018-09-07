import * as React from 'react';
import { Provider } from 'react-redux';
import Todo from '../src/Todo';

import { default as configureStore } from '../src/store';

import { services as S } from '@organizations/datasource/todo';

function initService() {
  if (process.env.NODE_ENV !== 'production') return new S.TodoService();

  return new S.TodoService();
}

const services = {
  todo: initService(),
};

const store = configureStore({}, { services }, []);

export default class extends React.Component<
  {
    initialData: any;
    isServer: boolean;
  },
  {}
> {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
