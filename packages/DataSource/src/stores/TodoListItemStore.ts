import { observable, action } from 'mobx'

class TodoListItemStore {

    // Mark: Variables

    @observable id: number
    @observable text: string
    @observable isCompleted: boolean

    // Mark: Constructor

    public static init(json: any): TodoListItemStore {
        return new TodoListItemStore(
            json["text"],
            json["id"],
            json["isCompleted"]
        )
    }

    constructor(text: string, id: number = new Date().getTime(), isCompleted: boolean = false) {
        this.id = id
        this.text = text
        this.isCompleted = isCompleted
    }

    // Mark: Actions

    @action setCompleteness(completed: boolean) {
        this.isCompleted = completed
    }

    getObject(): any {
        return {
            id: this.id,
            text: this.text,
            isCompleted: this.isCompleted
        }
    }

}

export { TodoListItemStore }