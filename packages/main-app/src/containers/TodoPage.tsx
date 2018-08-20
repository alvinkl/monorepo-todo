import React from 'react';
import { observer } from 'mobx-react';

import '@alvin/todo/lib/pages/Todo/components/TodoListItem.css';
import '@alvin/todo/lib/pages/Todo/components/TodoListView.css';

import { TodoContainerStore, LocalTodoService } from '@alvin/datasource';

import { Todo } from '@alvin/todo';

@observer
export class TodoPage extends React.Component {
  store = new TodoContainerStore(new LocalTodoService());

  componentDidMount() {
    this.store.loadItems();

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
