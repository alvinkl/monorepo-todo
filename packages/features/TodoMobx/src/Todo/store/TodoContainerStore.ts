import { interfaces as I } from '@organizations/datasource/todo';
import { action, computed, configure, observable, runInAction } from 'mobx';

import { TodoListItemStore } from './TodoListItemStore';

configure({
  enforceActions: 'observed',
});

let store;

export class TodoContainerStore {
  @observable
  items: TodoListItemStore[] = [];

  @observable
  error: Error | null = null;

  private service: I.ITodoService;

  constructor(service: I.ITodoService, initialData?: TodoListItemStore[]) {
    this.service = service;

    this.items = initialData || [];
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
    this.service.add(text).subscribe(({ Id, Content, Checked }) => {
      const newList = TodoListItemStore.init(Content, Id, Checked);
      this.items.push(newList);
    });
  }

  @action
  setAllItems(items: TodoListItemStore[]) {
    this.items = items;
  }

  @action
  updateItem(id: number) {
    this.items.filter((todo) => todo.id === id).map(({ id, isCompleted }) => {
      this.service
        .update(id, !isCompleted)
        .subscribe(({ Id, Checked }) =>
          runInAction(() =>
            this.items
              .filter(({ id }) => id === Id)
              .map((d) => (d.isCompleted = Checked))
          )
        );
    });
  }

  @action
  loadItems() {
    this.service.get().subscribe((data) => {
      const items = data.map(({ Content, Id, Checked }) =>
        TodoListItemStore.init(Content, Id, Checked)
      );

      this.setAllItems(items);
    });
  }

  @action
  setError(error: Error) {
    this.error = error;
  }
}

export const initStore = (service, isServer: boolean, initialData?) => {
  if (isServer) return new TodoContainerStore(service);

  if (!store) store = new TodoContainerStore(service, initialData);

  return store;
};
