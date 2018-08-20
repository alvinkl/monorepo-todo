import TodoListItemStore from "../../stores/Todo/TodoListItemStore";

export default interface ITodoService {
  addTodo(todo: TodoListItemStore);
  saveTodos(todos: TodoListItemStore[]);
  getTodos(): TodoListItemStore[];
}
