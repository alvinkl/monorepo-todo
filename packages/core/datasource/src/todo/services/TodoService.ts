import { Rxios } from 'rxios';
import { Observable } from 'rxjs';
import { ITodoModel, ITodoService } from '../interfaces/';

export class TodoService implements ITodoService {
  private readonly http = new Rxios({
    baseURL: 'http://localhost:8000',
    auth: {
      username: 'erdhee@icloud.com',
      password: '123456',
    },
    withCredentials: true,
  });

  get(): Observable<ITodoModel[]> {
    return this.http.get<ITodoModel[]>('todo');
  }

  add(content: string): Observable<ITodoModel> {
    const id = Date.parse(new Date().toString());
    return this.http.post<ITodoModel>('todo', {
      Content: content,
      Id: id,
      id,
      Checked: false,
      Deleted: false,
    });
  }

  update(id: number, checked: boolean): Observable<ITodoModel> {
    return this.http.patch<ITodoModel>(`todo/${String(id)}`, {
      Checked: checked,
    });
  }

  remove(id: number): Observable<{}> {
    return this.http.delete(`items/${String(id)}.json`);
  }
}

export default TodoService;
