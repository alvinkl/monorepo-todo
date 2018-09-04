import { Observable } from 'rxjs';
import { ITodoListItem } from '../models';

export default interface ITodoService {
  addTodo(todo: ITodoListItem);
  getTodos(): Observable<ITodoListItem[]>;
}
