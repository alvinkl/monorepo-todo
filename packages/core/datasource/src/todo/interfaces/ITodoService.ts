import { ITodoListItem } from '../models';

export default interface ITodoService {
  addTodo(todo: ITodoListItem);
  getTodos(): ITodoListItem[] | Promise<ITodoListItem[]>;
}
