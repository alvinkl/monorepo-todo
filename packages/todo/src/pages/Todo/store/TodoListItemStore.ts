import { action, configure, observable } from 'mobx';

configure({
  enforceActions: true,
});

export class TodoListItemStore {
  get current(): any {
    return {
      id: this.id,
      isCompleted: this.isCompleted,
      text: this.text,
    };
  }

  @action
  static init(json: any): TodoListItemStore {
    return new TodoListItemStore(json.text, json.id, json.isCompleted);
  }
  @observable
  id: number;

  @observable
  text: string;

  @observable
  isCompleted: boolean;

  constructor(
    text: string,
    id: number = new Date().getTime(),
    isCompleted: boolean = false
  ) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  @action
  setCompleteness(completed: boolean) {
    this.isCompleted = completed;
  }
}

export default TodoListItemStore;
