import { observable, action, configure } from 'mobx';

configure({
  enforceActions: true,
});

export class TodoListItemStore {
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
  public static init(json: any): TodoListItemStore {
    return new TodoListItemStore(json.text, json.id, json.isCompleted);
  }

  @action
  setCompleteness(completed: boolean) {
    this.isCompleted = completed;
  }

  get current(): any {
    return {
      id: this.id,
      text: this.text,
      isCompleted: this.isCompleted,
    };
  }
}

export default TodoListItemStore;
