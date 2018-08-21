export interface ITodoListItemStore {
  id: number;

  text: string;

  isCompleted: boolean;

  setCompleteness: (completed: boolean) => void;

  current: any;
}

export default ITodoListItemStore;
