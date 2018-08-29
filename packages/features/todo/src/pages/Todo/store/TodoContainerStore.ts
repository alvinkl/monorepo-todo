import { fetch as f, interfaces as I } from '@organizations/datasource/todo';
import { action, computed, configure, observable } from 'mobx';

import { TodoListItemStore } from './TodoListItemStore';

configure({
  enforceActions: true,
});

export class TodoContainerStore {
  @observable
  items: I.TodoListItemStore[] = [];

  @observable
  fetchedItems: I.TodoListItemStore[] = [];

  @observable
  error: Error | null = null;

  private service: I.ITodoService;

  constructor(service: I.ITodoService) {
    this.service = service;
  }

  @computed
  get activeItems() {
    return this.items
      .filter(object => !object.isCompleted)
      .sort((_, secondObject) => secondObject.id);
  }

  @computed
  get completedItems() {
    return this.items
      .filter(object => object.isCompleted)
      .sort((_, obj) => obj.id);
  }

  @action
  addItem(text: string) {
    const item = new TodoListItemStore(text);
    this.service.addTodo(item);
    this.items.push(item);
  }

  @action
  saveItems() {
    this.service.saveTodos(this.items);
  }

  @action
  loadItems() {
    this.items = this.service
      .getTodos()
      .map(json => TodoListItemStore.init(json));
  }

  async fetchTodos() {
    const { error, data } = await f.fetchTodo();
    if (error) {
      this.setError(error);
      return;
    }
    const dt = data!.map(
      ({ title, id, completed }) => new TodoListItemStore(title, id, completed)
    );
    this.setFetchedItems(dt);
  }

  @action
  setFetchedItems(item: I.ITodoListItemStore[]) {
    this.fetchedItems.push(...item);
  }

  @action
  setError(error: Error) {
    this.error = error;
  }
}

export default TodoContainerStore;
