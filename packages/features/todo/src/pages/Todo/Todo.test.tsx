import { shallow } from 'enzyme';
import * as React from 'react';

import ITodoService from './interfaces/ITodoService';
import { TodoContainerStore } from './store/TodoContainerStore';

import TodoListView from './components/TodoListView';
import { default as Todo } from './index';

class MockService implements ITodoService {
  addTodo() {}
  getTodos() {
    return [];
  }
  saveTodos() {}
}

describe('Todo Page Component', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => [],
    })
  );

  let store: TodoContainerStore;

  beforeEach(() => {
    store = new TodoContainerStore(new MockService());
    store.addItem('Testing Todo 1');
    store.addItem('Testing Todo 2');
    store.addItem('Testing Todo 3');
  });

  it('Renders Todo', () => {
    const wrapper = shallow(<Todo store={store} />);

    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find(TodoListView).length).toBe(3);
  });
});
