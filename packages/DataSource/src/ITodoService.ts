import { TodoListItemStore } from './stores/TodoListItemStore';

interface ITodoService {
    addTodo(todo: TodoListItemStore)
    saveTodos(todos: TodoListItemStore[])
    getTodos(): TodoListItemStore[]
}

export { ITodoService }