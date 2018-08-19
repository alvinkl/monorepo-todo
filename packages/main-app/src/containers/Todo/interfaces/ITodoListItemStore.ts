export class ITodoListItemStore {
  id: number;

  text: string;

  isCompleted: boolean;

  setCompleteness(completed: boolean) {}

  get current(): any {
    return this;
  }
}

export default ITodoListItemStore;
