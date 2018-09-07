import { shallow } from 'enzyme';
import * as React from 'react';

import { services as S } from '@organizations/datasource/todo';
import { TodoContainerStore } from './store/TodoContainerStore';

import TodoListView from './components/TodoListView';
import Todo from './Todo';

describe('Todo Page Component', () => {
  let store: TodoContainerStore;

  beforeEach(() => {
    store = new TodoContainerStore(new S.MockTodoService());
  });

  it("Doesn't render Todo", () => {
    const wrapper = shallow(<Todo store={store} />);

    expect(wrapper.find(TodoListView).length).toBe(0);
  });
});
