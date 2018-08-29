import { default as to } from '../../utils/asyncAwait';
import { ITodoListItem } from '../models';

export interface IReturnPromise {
  error?: Error;
  data: ITodoListItem[];
}

export const fetchTodo = async (): Promise<IReturnPromise> => {
  const { error, response } = await to(
    fetch('https://jsonplaceholder.typicode.com/todos')
  );
  if (error) {
    return {
      data: [],
      error,
    };
  }

  const data: ITodoListItem[] = await response!.json();

  return {
    data,
  };
};

export default fetchTodo;
