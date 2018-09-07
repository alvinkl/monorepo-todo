import { services as S } from '@organizations/datasource/todo';
import { TodoStore } from './TodoStore';

describe('[Todo] [Store] TodoStore', () => {
  let store: TodoStore;

  beforeEach(() => {
    store = new TodoStore(new S.MockTodoService());
  });

  it('Should return true [Please dont do this... :(]', () => {
    expect(true).toBe(true);
  });
});
