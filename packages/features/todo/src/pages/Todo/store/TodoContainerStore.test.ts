import { interfaces as I } from '@organizations/datasource/todo';
import { TodoContainerStore } from './TodoContainerStore';

class MockService implements I.ITodoService {
  addTodo() {}
  getTodos() {
    return [];
  }
  saveTodos() {}
}

describe('[Todo] [Store] TodoContainerStore', () => {
  let store: TodoContainerStore;

  beforeEach(() => {
    store = new TodoContainerStore(new MockService());
  });

  it('Should Add Item to items', () => {
    store.addItem('Testing Todo');

    expect(store.items).toEqual(store.activeItems);
  });

  it('Should Return Active Items', () => {
    store.addItem('Testing Todo');

    expect(store.items).toEqual(store.activeItems);
  });

  it('Should Return Completed Items', () => {
    store.addItem('Testing Todo');

    expect(store.activeItems).toHaveLength(1);
    const item = store.items[0];

    store.updateItem(item.id);

    expect(store.activeItems).toHaveLength(0);
    expect(store.completedItems).toHaveLength(1);
  });
});