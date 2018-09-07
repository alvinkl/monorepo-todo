import { Rxios } from 'rxios';
import { Observable } from 'rxjs';
import { TodoAPI } from '../../config/uri';
import { ITodoModel, ITodoService } from '../interfaces/';

export class TodoService implements ITodoService {
  private readonly http = new Rxios({
    auth: {
      username: 'erdhee@icloud.com',
      password: '123456',
    },
    withCredentials: true,
  });

  get(): Observable<ITodoModel[]> {
    return this.http.get<ITodoModel[]>(TodoAPI.GET);
  }

  add(content: string): Observable<ITodoModel> {
    const id = Date.parse(new Date().toString());
    return this.http.post<ITodoModel>(TodoAPI.ADD, {
      Content: content,
      Id: id,
      id,
      Checked: false,
      Deleted: false,
    });
  }

  update(id: number, checked: boolean): Observable<ITodoModel> {
    return this.http.patch<ITodoModel>(TodoAPI.UPDATE.replace('$id', `${id}`), {
      Checked: checked,
    });
  }
}

export default TodoService;
