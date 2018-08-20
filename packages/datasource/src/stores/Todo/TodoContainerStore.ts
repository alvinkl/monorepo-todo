import { observable, action, computed, configure } from 'mobx';

import to from '../../utils/asyncAwait';
import { TodoListItemStore } from './TodoListItemStore';
import ITodoService from '../../interfaces/Todo/ITodoService';

configure({
  enforceActions: true,
});

export class TodoContainerStore {
  @observable
  items: TodoListItemStore[] = [];

  @observable
  fetchedItems: TodoListItemStore[] = [];

  @observable
  error: Error = null;

  private service?: ITodoService;

  constructor(service: ITodoService) {
    this.service = service;
  }

  @computed
  get activeItems() {
    return this.items
      .filter(object => !object.isCompleted)
      .sort((__dirname, secondObject) => secondObject.id);
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
    this.items = this.service.getTodos();
  }

  async fetchTodos() {
    const [err, response] = await to(
      fetch('https://jsonplaceholder.typicode.com/todos')
    );
    if (err) return this.setError(err);

    const data = await response.json();

    const dt = data.map(
      ({ title, id, completed }) => new TodoListItemStore(title, id, completed)
    );

    this.setFetchedItems(dt);
  }

  @action
  setFetchedItems(item: TodoListItemStore[]) {
    this.fetchedItems.push(...item);
  }

  @action
  setError(error: Error) {
    this.error = error;
  }
}

export default TodoContainerStore;
