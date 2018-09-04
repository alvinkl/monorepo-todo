import { Observable } from 'rxjs';
import { ITodoListItem } from '../models/ITodoListItem';

export default interface ITodoService {
  addTodo(todo: ITodoListItem);
  getTodos(): Observable<ITodoListItem[]>;
}
