import * as React from 'react';

import {
  MemoStore,
  TodoContainerStore,
  LocalTodoService,
} from '@alvin/datasource';

import { Memo } from '@alvin/memo';
import { Todo } from '@alvin/todo';

export class MixMemoTodo extends React.Component {
  memoStore = new MemoStore('Mix Memo Todo');
  todoStore = new TodoContainerStore(new LocalTodoService());

  componentDidMount() {
    this.todoStore.loadItems();
    this.todoStore.fetchTodos();

    window.onbeforeunload = () => this.beforeUnload();
  }

  handleError(error) {
    this.setState({
      error,
    });
  }

  beforeUnload() {
    this.todoStore.saveItems();
  }

  render() {
    return (
      <div>
        <Memo store={this.memoStore} />
        <Todo store={this.todoStore} />
      </div>
    );
  }
}

export default MixMemoTodo;
