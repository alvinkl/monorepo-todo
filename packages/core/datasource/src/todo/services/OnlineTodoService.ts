import { default as to } from '../../utils/asyncAwait';
import { ITodoService } from '../interfaces';
import { ITodoListItem } from '../models';

export class OnlineTodoService implements ITodoService {
  addTodo(todo: ITodoListItem) {
    throw new Error(JSON.stringify(todo));
  }

  async getTodos(): Promise<ITodoListItem[]> {
    const { error, response } = await to(
      fetch('https://jsonplaceholder.typicode.com/todos')
    );
    if (error) return [];

    const data: ITodoListItem[] = await response!.json();

    return data;
  }
}

export default OnlineTodoService;
