import { Observable } from 'rxjs';
import { ITodoListItem, ITodoService } from '../../interfaces';

export class MockOnlineTodoService implements ITodoService {
  addTodo(todo: ITodoListItem) {
    throw new Error(JSON.stringify(todo));
  }

  getTodos(): Observable<ITodoListItem[]> {
    return Observable.create([
      {
        title: 'testing',
        id: 1,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 2,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 3,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 4,
        completed: true,
        userId: 0,
      },
    ]);
  }
}

export default MockOnlineTodoService;
