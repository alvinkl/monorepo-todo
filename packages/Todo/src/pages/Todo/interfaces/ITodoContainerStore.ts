import { ITodoListItemStore } from './ITodoListItemStore';

export class ITodoContainerStore {
  items: ITodoListItemStore[] = [];
  fetchedItems: ITodoListItemStore[] = [];
  error: Error = null;

  get activeItems() {
    return [];
  }

  get completedItems() {
    return [];
  }

  addItem(text: string) {}
  saveItems() {}
  loadItems() {}
}

export default ITodoContainerStore;
