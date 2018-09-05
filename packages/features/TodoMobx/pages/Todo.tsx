import { Provider } from 'mobx-react';
import * as React from 'react';
import Todo from '../src/Todo';

import { services as S } from '@organizations/datasource/todo';
import {
  initStore,
  TodoContainerStore,
} from '../src/Todo/store/TodoContainerStore';

export default class extends React.Component<
  {
    initialData: any;
    isServer: boolean;
  },
  {}
> {
  static async getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(new S.MockTodoService(), isServer);

    await store.loadItems();
    const initialData = store.items;

    return { isServer, initialData };
  }

  store: TodoContainerStore;

  constructor(props) {
    super(props);

    this.store = initStore(
      new S.MockTodoService(),
      props.isServer,
      props.initialData
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <Todo />
      </Provider>
    );
  }
}
