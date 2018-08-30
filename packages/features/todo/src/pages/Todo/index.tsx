import * as React from 'react';
import Todo from './Todo';

import { services as S } from '@organizations/datasource/todo';
import { TodoContainerStore } from './store/TodoContainerStore';

export default class extends React.Component<
  {
    store: TodoContainerStore;
    isServer: boolean;
  },
  {}
> {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = new TodoContainerStore(new S.OnlineTodoService('Todo'));

    return { isServer, store };
  }

  render() {
    const { store } = this.props;

    return <Todo {...{ store }} />;
  }
}
