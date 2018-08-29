// import * as datasource from '@organizations/datasource';
import ITodoService from '../interfaces/ITodoService';
import { TodoListItemStore } from '../store/TodoListItemStore';

const LocalStorageService = (ksey: string) => {
  const key = ksey;

  return {
    addItem: (item: any) => {
      localStorage.setItem(
        key,
        typeof item !== 'string' ? JSON.stringify(item) : item
      );
    },

    getItems: (): any => {
      const storageValue: any = localStorage.getItem(key) || null;
      const obj: any = storageValue ? JSON.parse(storageValue) : null;

      return obj;
    },
  };
};

export class LocalTodoService implements ITodoService {
  localStorage: any;

  constructor(key: string) {
    this.localStorage = LocalStorageService(key);
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
