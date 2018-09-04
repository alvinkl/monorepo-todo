import { shallow } from 'enzyme';
import * as React from 'react';

import { mocks } from '@organizations/datasource/todo';
import { TodoContainerStore } from './store/TodoContainerStore';

import TodoListView from './components/TodoListView';
import Todo from './Todo';

const {
  services: { MockOnlineTodoService },
} = mocks;

describe('Todo Page Component', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => [],
    })
  );

  let store: TodoContainerStore;

  beforeEach(() => {
    store = new TodoContainerStore(new MockOnlineTodoService());
  });

  it('Renders Todo', () => {
    const wrapper = shallow(<Todo store={store} />);

    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find(TodoListView).length).toBe(2);
  });
});
