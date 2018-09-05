import { Observable } from 'rxjs';
import { ITodoModel, ITodoService } from '../interfaces';

export class MockTodoService implements ITodoService {
  // Mark: Mock Storage

  todos: ITodoModel[] = [];

  constructor() {
    this.todos = [1, 2, 3, 4, 5].map((d) =>
      this.getTodoModel(`content ${d}`, d)
    );
  }

  get(): Observable<ITodoModel[]> {
    return Observable.create((observer) => {
      observer.next(this.todos);
    });
  }

  add(content: string): Observable<ITodoModel> {
    return Observable.create((observer) => {
      const todo = this.getTodoModel(content, Math.random());

      this.todos.push(todo);
      observer.next(todo);
    });
  }

  update(id: number, checked: boolean): Observable<ITodoModel> {
    return Observable.create((observer) => {
      const todo = this.todos.filter(({ Id }) => Id === id)[0];

      if (todo === undefined || todo === null) {
        observer.error('Todo Not Found');
      } else {
        todo.Checked = checked;
        observer.next(todo);
      }
    });
  }

  remove(id: number): Observable<{}> {
    return Observable.create((observer) => {
      const todo = this.todos.filter(({ Id }) => Id === id)[0];

      if (todo === undefined || todo === null) {
        observer.error('Todo Not Found');
      } else {
        this.todos = this.todos.filter((value) => value !== todo);
        observer.next();
      }
    });
  }

  getTodoModel(content: string, id: number): ITodoModel {
    const lastTodoId = id;
    const result: ITodoModel = {
      Id: lastTodoId,
      Checked: false,
      Content: content,
      Deleted: false,
    };

    return result;
  }
}
