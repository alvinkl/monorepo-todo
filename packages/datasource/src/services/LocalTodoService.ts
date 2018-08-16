// import { ITodoService } from './ITodoService'
import { TodoListItemStore } from '../stores/TodoListItemStore'

export interface ITodoService {
    addTodo(todo: TodoListItemStore)
    saveTodos(todos: TodoListItemStore[])
    getTodos(): TodoListItemStore[]
}

export class LocalTodoService implements ITodoService {
    private key: string = "todos"

    addTodo(todo: TodoListItemStore) {
        const object = todo.current
        let items = this.getTodos()

        items.push(object)
        localStorage.setItem(this.key, JSON.stringify(items))
    }

    saveTodos(todos: TodoListItemStore[]) {
        const objects = todos.map(
            obj => obj.current
        )
        const str = JSON.stringify(objects)

        localStorage.setItem(this.key, str)
    }

    getTodos(): TodoListItemStore[] {
        const storageValue = localStorage.getItem(this.key)
        const obj = JSON.parse(storageValue) as any[] || []

        return obj.map(json => TodoListItemStore.init(json))
    }
}

export default LocalTodoService