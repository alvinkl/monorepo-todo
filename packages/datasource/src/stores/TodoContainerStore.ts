import { observable, action, computed } from 'mobx'
import { TodoListItemStore } from './TodoListItemStore'
// import { ITodoService } from '../services/ITodoService'

export interface ITodoService {
    addTodo(todo: TodoListItemStore)
    saveTodos(todos: TodoListItemStore[])
    getTodos(): TodoListItemStore[]
}

export class TodoContainerStore {
    @observable items: TodoListItemStore[] = []
    private service?: ITodoService

    constructor(service: ITodoService) {
        this.service = service
    }

    @computed get activeItems() {
        return this.items
            .filter(object => !object.isCompleted)
            .sort(
                (__dirname, secondObject) => 
                secondObject.id
            )
    }

    @computed get completedItems() {
        return this.items
            .filter(object => object.isCompleted)
            .sort((_, obj) => obj.id)
    }

    @action addItem(item: TodoListItemStore) {
        this.service.addTodo(item)
        this.items.push(item)
    }

    @action saveItems() {
        this.service.saveTodos(this.items)
    }

    @action loadItems() {
        this.items = this.service.getTodos()
    }
}

export default TodoContainerStore