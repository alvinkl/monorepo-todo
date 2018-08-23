import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import TodoListItemStore from '../store/TodoListItemStore';

import TodoListItem from './TodoListItem';

const style = {
  ul: css`
    padding: 10px;
    bottom: 1px solid #dee2e6;
    border-top: none;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  `,
};

export const TodoListView = inject('todos')(
  observer(({ todos, error, onChange }) => (
    <ul className={style.ul}>
      {!error &&
        todos.map((d: TodoListItemStore) => (
          <TodoListItem {...d} key={d.id} onChange={onChange.bind(null, d)} />
        ))}

      {error && <h1>ERROR LAH</h1>}
    </ul>
  ))
);

export default TodoListView;
