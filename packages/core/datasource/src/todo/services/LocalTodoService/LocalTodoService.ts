import { LocalStorageService } from '../../../shared/services';
import { ITodoListItemStore, ITodoService } from '../../interfaces';

export class LocalTodoService implements ITodoService {
  localStorage: LocalStorageService;

  constructor(key: string) {
    this.localStorage = new LocalStorageService(key);
  }

  getTodos(): ITodoListItemStore[] {
    const obj = this.localStorage.getItems() || [];

    return obj.map(
      json =>
        ({
          id: json.id,
          isCompleted: json.isCompleted,
          text: json.text,
        } as ITodoListItemStore)
    );
  }

  addTodo(todo: ITodoListItemStore) {
    const object = todo.current;
    const items = this.getTodos();

    items.push(object);

    this.localStorage.addItem(items);
  }

  saveTodos(todos: ITodoListItemStore[]) {
    const objects = todos.map(obj => obj);

    this.localStorage.addItem(objects);
  }
}

export default LocalTodoService;
