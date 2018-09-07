import { Observable } from 'rxjs';
import { ITodoModel } from '../index';

export interface ITodoService {
  get(): Observable<ITodoModel[]>;
  add(content: string): Observable<ITodoModel>;
  update(id: number, checked: boolean): Observable<ITodoModel>;
}

export default ITodoService;
