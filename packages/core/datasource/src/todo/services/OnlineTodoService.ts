import { Rxios } from 'rxios';
import { Observable } from 'rxjs';
import { ITodoListItem, ITodoService } from '../interfaces';

export class OnlineRXTodoService implements ITodoService {
  private http: Rxios;

  constructor() {
    this.http = new Rxios();
  }

  addTodo() {}

  getTodos(): Observable<ITodoListItem[]> {
    return this.http.get<ITodoListItem[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

export default OnlineRXTodoService;
