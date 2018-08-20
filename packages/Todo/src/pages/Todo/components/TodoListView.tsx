import * as React from 'react';
import { observer, inject } from 'mobx-react';

import TodoListItem from './TodoListItem';

// import "./TodoListView.css";

export const TodoListView = inject('todos')(
  observer(({ todos, error, onChange }) => {
    return (
      <ul className="td-list-container">
        {!error &&
          todos.map(d => (
            <TodoListItem {...d} key={d.id} onChange={onChange.bind(null, d)} />
          ))}

        {error && <h1>ERROR LAH</h1>}
      </ul>
    );
  })
);

export default TodoListView;
