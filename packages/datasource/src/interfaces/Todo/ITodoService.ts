export default interface ITodoService {
  addTodo(todo: TodoListItemStore);
  saveTodos(todos: TodoListItemStore[]);
  getTodos(): TodoListItemStore[];
}
