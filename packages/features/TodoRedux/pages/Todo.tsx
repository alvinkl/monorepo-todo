import * as React from 'react';
import { Provider } from 'react-redux';
import Todo from '../src/Todo';

import { default as configureStore } from '../src/store';

const store = configureStore({}, {}, []);

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
