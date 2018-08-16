import { observable, action } from 'mobx'

export class TodoListItemStore {
    @observable id: number
    @observable text: string
    @observable isCompleted: boolean

    constructor(text: string, id: number = new Date().getTime(), isCompleted: boolean = false) {
        this.id = id
        this.text = text
        this.isCompleted = isCompleted
    }

    public static init(json: any): TodoListItemStore {
        return new TodoListItemStore(
            json["text"],
            json["id"],
            json['isCompleted']
        )
    }

    @action setCompleteness(completed: boolean) {
        this.isCompleted = completed
    }

    get current(): any {
        return {
            id: this.id,
            text: this.text,
            isCompleted: this.isCompleted
        }
    }
}

export default TodoListItemStore