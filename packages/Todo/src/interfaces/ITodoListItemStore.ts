class ITodoListItemStore {
    // Mark: Variables
    id: number;
    text: string;
    isCompleted: boolean;

    // Mark: Actions

    setCompleteness(completed: boolean) {}

    getObject(): any {}
}

export { ITodoListItemStore };
