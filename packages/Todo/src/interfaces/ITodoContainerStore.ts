import { ITodoListItemStore } from './ITodoListItemStore';

class ITodoContainerStore {
    // Mark: Variables

    items: ITodoListItemStore[] = [];

    // Mark: Computed Functions

    get activeItems() {
        return [];
    }

    get completedItems() {
        return [];
    }

    // Mark: Actions

    addItem(item: ITodoListItemStore) {}

    saveItems() {}

    loadItems() {}
}

export { ITodoContainerStore };
