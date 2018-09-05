import { Rxios } from 'rxios';
import { Observable } from 'rxjs';
import { ITodoModel, ITodoService } from '../interfaces/';

export class TodoService implements ITodoService {
  private readonly http = new Rxios({
    baseURL: 'https://todo.ly/api/',
    auth: {
      username: 'erdhee@icloud.com',
      password: '123456',
    },
    withCredentials: true,
  });

  get(): Observable<ITodoModel[]> {
    return this.http.get<ITodoModel[]>('items.json');
  }

  add(content: string): Observable<ITodoModel> {
    return this.http.post<ITodoModel>('items.json', {
      Content: content,
    });
  }

  update(id: number, checked: boolean): Observable<ITodoModel> {
    return this.http.post<ITodoModel>(`items/${String(id)}.json`, {
      Checked: checked,
    });
  }

  remove(id: number): Observable<{}> {
    return this.http.delete(`items/${String(id)}.json`);
  }
}

export default TodoService;
