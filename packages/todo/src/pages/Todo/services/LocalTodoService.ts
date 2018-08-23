import { services } from '@alvin/datasource';

import ITodoService from '../interfaces/ITodoService';
import { TodoListItemStore } from '../store/TodoListItemStore';

export class LocalTodoService implements ITodoService {
  localStorage: services.LocalStorage;

  constructor(key: string) {
    this.localStorage = new services.LocalStorage(key);

    console.log(this.localStorage);
  }

  addTodo(todo: TodoListItemStore) {
    const object = todo.current;
    const items = this.getTodos();

    items.push(object);

    this.localStorage.addItem(items);
  }

  saveTodos(todos: TodoListItemStore[]) {
    const objects = todos.map(obj => obj.current);

    this.localStorage.addItem(objects);

    // localStorage.setItem(this.key, str);
  }

  getTodos(): TodoListItemStore[] {
    const obj = this.localStorage.getItems() || [];

    return obj.map(json => TodoListItemStore.init(json));
  }
}

export default LocalTodoService;
