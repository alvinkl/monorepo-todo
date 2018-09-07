import { action, configure, observable } from 'mobx';

import { interfaces as I } from '@organizations/datasource/todo';

configure({
  enforceActions: 'observed',
});

let store;

export class TodoStore {
  service: I.ITodoService;

  @observable
  todos: any[] = [
    {
      id: 1,
      content: 'AWESOME CSS!!',
      isCompleted: false,
    },
  ];

  constructor(service: I.ITodoService) {
    this.service = service;
  }

  @action
  setTodo = (todos: any[]) => {
    this.todos = todos;
  };
}

export const initStore = (service) => {
  if (!store) store = new TodoStore(new service());

  return store;
};
