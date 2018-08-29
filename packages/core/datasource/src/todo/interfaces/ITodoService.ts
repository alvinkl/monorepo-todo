import ITodoListItemStore from './ITodoListItemStore';

export default interface ITodoService {
  addTodo(todo: ITodoListItemStore);
  saveTodos(todos: ITodoListItemStore[]);
  getTodos(): ITodoListItemStore[];
}
