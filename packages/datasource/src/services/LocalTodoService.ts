import ITodoService from "../interfaces/ITodoService";
import { TodoListItemStore } from "../stores/TodoListItemStore";

export class LocalTodoService implements ITodoService {
  private key: string = "todos";

  addTodo(todo: TodoListItemStore) {
    const object = todo.current;
    const items = this.getTodos();

    items.push(object);
    localStorage.setItem(this.key, JSON.stringify(items));
  }

  saveTodos(todos: TodoListItemStore[]) {
    const objects = todos.map(obj => obj.current);
    const str = JSON.stringify(objects);

    localStorage.setItem(this.key, str);
  }

  getTodos(): TodoListItemStore[] {
    const storageValue = localStorage.getItem(this.key);
    const obj = (JSON.parse(storageValue) as any[]) || [];

    return obj.map(json => TodoListItemStore.init(json));
  }
}

export default LocalTodoService;
