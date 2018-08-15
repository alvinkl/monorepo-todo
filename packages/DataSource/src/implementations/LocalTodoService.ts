import { ITodoService } from '../ITodoService'
import { TodoListItemStore } from '../stores/TodoListItemStore';

class LocalTodoService implements ITodoService {

    // Mark: Variables

    private key: string = "todos"

    // Mark: ITodoService Implementation

    addTodo(todo: TodoListItemStore) {
        let object = todo.getObject()
        let items = this.getTodos()

        items.push(object)
        localStorage.setItem(this.key, JSON.stringify(items))
    }

    saveTodos(todos: TodoListItemStore[]) {
        let objects = todos.map((object) => object.getObject())
        let jsonString = JSON.stringify(objects)
        
        localStorage.setItem(this.key, jsonString)
    }

    getTodos(): TodoListItemStore[] {
        let storageValue = localStorage.getItem(this.key)
        let objects = JSON.parse(storageValue) as any[] || []
        
        return objects.map((json) => TodoListItemStore.init(json))
    }

}

export { LocalTodoService }