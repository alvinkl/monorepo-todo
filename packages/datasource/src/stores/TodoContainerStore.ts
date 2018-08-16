import { observable, action, computed } from 'mobx'
import { TodoListItemStore } from './TodoListItemStore'
import { ITodoService } from '../services/ITodoService'

export class TodoContainerStore {
    @observable items: TodoListItemStore[] = []
    private service?: ITodoService

    constructor(service: ITodoService) {
        this.service = service
    }
}