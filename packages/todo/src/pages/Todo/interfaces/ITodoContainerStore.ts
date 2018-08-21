import { ITodoListItemStore } from './ITodoListItemStore';

export interface ITodoContainerStore {
  items: ITodoListItemStore[];

  fetchedItems: ITodoListItemStore[];

  error?: Error;

  activeItems: ITodoListItemStore[];

  completedItems: ITodoListItemStore[];

  addItem: (text: string) => void;

  saveItems: Function;
  loadItems: Function;
}

export default ITodoContainerStore;
