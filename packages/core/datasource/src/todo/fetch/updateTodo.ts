import { default as to } from '../../utils/asyncAwait';
import { ITodoListItem } from '../models';

export interface IUpdateParam {
  id: number;
  title: string;
  userId: number;
  body: string;
}

interface IReturnPromise {
  data?: ITodoListItem;
  error?: Error;
}

export const updateTodo = async ({
  id,
  title,
  userId,
  body,
}: IUpdateParam): Promise<IReturnPromise> => {
  const { error, response } = await to(
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      body: JSON.stringify({
        body,
        id,
        title,
        userId,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
  );

  if (error) return { error };

  const data = await response!.json();

  return { data };
};

export default updateTodo;
