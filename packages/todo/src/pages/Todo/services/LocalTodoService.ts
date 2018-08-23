import ITodoService from '../interfaces/ITodoService';
import { TodoListItemStore } from '../store/TodoListItemStore';

import { services } from '@alvin/datasource';

const { LocalStorage } = services;

export class LocalTodoService implements ITodoService {
  localStorage: LocalStorage;

  constructor(key: string) {
    this.localStorage = new LocalStorage(key);

    console.log(this.localStorage);
  }

  addTodo(todo: TodoListItemStore) {
    const object = todo.current;
    const items = this.getTodos();

    items.push(object);

    this.localStorage.addItem(JSON.stringify(items));
    // localStorage.setItem(this.key, JSON.stringify(items));
  }

  saveTodos(todos: TodoListItemStore[]) {
    const objects = todos.map(obj => obj.current);
    const str = JSON.stringify(objects);

    this.localStorage.addItem(str);

    // localStorage.setItem(this.key, str);
  }

  getTodos(): TodoListItemStore[] {
    const obj = this.localStorage.getItems() || [];

    return obj.map(json => TodoListItemStore.init(json));
  }
}

export default LocalTodoService;
