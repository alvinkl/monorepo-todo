import { ITodoService } from '../ITodoService'
import { TodoListItemStore } from '../stores/TodoListItemStore';

class TemporaryTodoService implements ITodoService {

    // Mark: Variables

    private todos: TodoListItemStore[] = []

    // Mark: ITodoService Implementation

    addTodo(todo: TodoListItemStore) {
        this.todos.push(todo)
    }

    saveTodos(_: TodoListItemStore[]) {
        // Do Nothing with Todos because we don't have persistent storage
    }

    getTodos(): TodoListItemStore[] {
        return this.todos
    }

}

export { TemporaryTodoService }