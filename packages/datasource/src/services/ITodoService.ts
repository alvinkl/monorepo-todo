import { TodoListItemStore } from '../stores/TodoListItemStore'

export interface ITodoService {
    addTodo(todo: TodoListItemStore)
    saveTodos(todos: TodoListItemStore)
    getTodos(): TodoListItemStore[]
}

export default ITodoService