import to from '../../utils/asyncAwait';

export interface TodoTypes {
  title: string;
  id: number;
  completed: boolean;
  userId: number;
}

export interface ReturnPromise {
  error?: Error;
  data?: TodoTypes[];
}

export const fetchTodo = async (): Promise<ReturnPromise> => {
  const { error, response } = await to(
    fetch('https://jsonplaceholder.typicode.com/todos')
  );
  if (error)
    return Promise.resolve({
      error,
    });

  const data: TodoTypes[] = await response!.json();

  return Promise.resolve({
    data,
  });
};

export default fetchTodo;
