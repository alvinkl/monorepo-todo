import { action, configure, observable } from 'mobx';

configure({
  enforceActions: true,
});

export class TodoListItemStore {
  @action
  static init(
    text: string,
    id: number,
    isCompleted: boolean
  ): TodoListItemStore {
    return new TodoListItemStore(text, id, isCompleted);
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

  get current(): any {
    return {
      id: this.id,
      isCompleted: this.isCompleted,
      text: this.text,
    };
  }
}

export default TodoListItemStore;
