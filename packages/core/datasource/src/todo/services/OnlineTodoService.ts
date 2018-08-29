import { fetchTodo } from '../fetch';
import { IUpdateParam, updateTodo } from '../fetch/updateTodo';
import { ITodoService } from '../interfaces';
import { ITodoListItem } from '../models';

export class OnlineTodoService implements ITodoService {
  addTodo(todo: ITodoListItem) {
    throw new Error(JSON.stringify(todo));
  }

  async saveTodo(todo: IUpdateParam) {
    const { error, data } = await updateTodo(todo);

    if (error) return null;

    return data;
  }
  async getTodos(): Promise<ITodoListItem[]> {
    const { data, error } = await fetchTodo();
    if (error) return [];

    return data;
  }
}

export default OnlineTodoService;
