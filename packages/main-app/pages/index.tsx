import * as React from 'react';
import { Provider } from 'react-redux';

import pageWithStyles from '../pageWithStyles';
import { default as Todo } from '../src/features/TodoRedux/pages/Todo';

import { default as configureStore } from '../src/redux/configureStore';

import { services as S } from '@organizations/datasource/todo';

function initService() {
  if (process.env.NODE_ENV !== 'production') return new S.TodoService();

  return new S.TodoService();
}

const services = {
  todo: initService(),
};

const store = configureStore({}, { services }, []);

@pageWithStyles
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
