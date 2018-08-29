import { default as to } from '../../../utils/asyncAwait';

export interface ITodoTypes {
  title: string;
  id: number;
  completed: boolean;
  userId: number;
}

export interface IReturnPromise {
  error?: Error;
  data?: ITodoTypes[];
}

export const fetchTodo = async (): Promise<IReturnPromise> => {
  const { error, response } = await to(
    fetch('https://jsonplaceholder.typicode.com/todos')
  );
  if (error) {
    return Promise.resolve({
      error,
    });
  }

  const data: ITodoTypes[] = await response!.json();

  return Promise.resolve({
    data,
  });
};

export default fetchTodo;
