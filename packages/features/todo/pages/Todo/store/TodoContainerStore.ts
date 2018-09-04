import { interfaces as I } from '@organizations/datasource/todo';
import { action, computed, configure, observable } from 'mobx';

import { TodoListItemStore } from './TodoListItemStore';

configure({
  enforceActions: 'observed',
});

export class TodoContainerStore {
  @observable
  items: TodoListItemStore[] = [];

  @observable
  error: Error | null = null;

  private service: I.ITodoService;

  constructor(service: I.ITodoService) {
    this.service = service;
  }

  @computed
  get activeItems() {
    return this.items
      .filter((object) => !object.isCompleted)
      .sort((_, secondObject) => secondObject.id);
  }

  @computed
  get completedItems() {
    return this.items
      .filter((object) => object.isCompleted)
      .sort((_, obj) => obj.id);
  }

  @action
  addItem(text: string) {
    const item = new TodoListItemStore(text);
    this.service.addTodo(item);
    this.items.push(item);
  }

  @action
  setAllItems(items: TodoListItemStore[]) {
    this.items = items;
  }

  @action
  saveItems() {
    this.service.saveTodos(this.items);
  }

  @action
  updateItem(id: number) {
    this.items
      .filter((todo) => todo.id === id)
      .map(async (d) => (d.isCompleted = !d.isCompleted));
  }

  @action
  loadItems() {
    this.service.getTodos().subscribe((data) => {
      const items = data.map(({ title, id, completed }) =>
        TodoListItemStore.init(title, id, completed)
      );

      this.setAllItems(items);
    });
  }

  @action
  setError(error: Error) {
    this.error = error;
  }
}

export default TodoContainerStore;
