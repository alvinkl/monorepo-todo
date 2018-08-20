import to from '../../utils/asyncAwait';

export const fetchTodo = () => {
  return to(fetch('https://jsonplaceholder.typicode.com/todos'));
};

export default fetchTodo;
