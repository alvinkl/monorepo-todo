import { observable, action, computed } from "mobx";
import { TodoListItemStore } from "./TodoListItemStore";
import ITodoService from "../interfaces/ITodoService";

export class TodoContainerStore {
  @observable
  items: TodoListItemStore[] = [];

  private service?: ITodoService;

  constructor(service: ITodoService) {
    this.service = service;
  }

  @computed
  get activeItems() {
    return this.items
      .filter(object => !object.isCompleted)
      .sort((__dirname, secondObject) => secondObject.id);
  }

  @computed
  get completedItems() {
    return this.items
      .filter(object => object.isCompleted)
      .sort((_, obj) => obj.id);
  }

  @action
  addItem(text: string) {
    const item = new TodoListItemStore(text);
    this.service.addTodo(item);
    this.items.push(item);
  }

  @action
  saveItems() {
    this.service.saveTodos(this.items);
  }

  @action
  loadItems() {
    this.items = this.service.getTodos();
  }
}

export default TodoContainerStore;
