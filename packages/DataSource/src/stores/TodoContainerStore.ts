import { observable, action, computed } from 'mobx'
import { TodoListItemStore } from './TodoListItemStore';
import { ITodoService } from '../ITodoService'

class TodoContainerStore {

    // Mark: Variables

    @observable items: TodoListItemStore[] = []
    private service?: ITodoService

    // Mark: Constructor

    constructor(service: ITodoService) {
        this.service = service
    }
    
    // Mark: Computed Functions

    @computed get activeItems() {
        return this.items.filter((object) => {
            return !object.isCompleted
        }).sort((_, secondObject) => secondObject.id)
    }

    @computed get completedItems() {
        return this.items.filter((object) => {
            return object.isCompleted
        }).sort((_, secondObject) => secondObject.id)
    }

    // Mark: Actions

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

export { TodoContainerStore }