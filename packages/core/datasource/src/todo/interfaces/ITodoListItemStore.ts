export interface ITodoListItemStore {
  id: number;
  text: string;
  isCompleted: boolean;

  current?: any;
}

export default ITodoListItemStore;
