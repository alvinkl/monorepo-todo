import React from 'react';
import { observer } from 'mobx-react';

import { Todo as T } from '@alvin/datasource';

import { Todo } from '@alvin/todo';

@observer
export class TodoPage extends React.Component {
  store = new T.TodoContainerStore(new T.LocalTodoService());

  componentDidMount() {
    this.store.loadItems();
    this.store.fetchTodos();

    window.onbeforeunload = () => this.beforeUnload();
  }

  beforeUnload() {
    this.store.saveItems();
  }

  render() {
    return (
      <div>
        <Todo store={this.store} />
      </div>
    );
  }
}

export default TodoPage;
