import { IUpdateParam } from '../fetch/updateTodo';
import { ITodoListItem } from '../models';

export default interface ITodoService {
  saveTodo: (todo: IUpdateParam) => any;
  addTodo(todo: ITodoListItem);
  getTodos(): ITodoListItem[] | Promise<ITodoListItem[]>;
}
