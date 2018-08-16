import { ITodoListItemStore } from "./ITodoListItemStore";

export class ITodoContainerStore {
  items: ITodoListItemStore[] = [];

  get activeItems() {
    return [];
  }

  get completedItems() {
    return [];
  }

  addItem(item: ITodoListItemStore) {}
  saveItems() {}
  loadItems() {}
}

export default ITodoContainerStore;
