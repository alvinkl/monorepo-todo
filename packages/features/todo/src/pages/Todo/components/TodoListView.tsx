import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import TodoListItemStore from '../store/TodoListItemStore';

import TodoListItem from './TodoListItem';

import * as style from './todoListView.css';

export const TodoListView = inject('todos')(
  observer(({ todos, error, onChange }) => (
    <ul className={style.list}>
      {!error &&
        todos.map((d: TodoListItemStore) => (
          <TodoListItem {...d} key={d.id} onChange={onChange.bind(null, d)} />
        ))}

      {error && <h1>ERROR LAH</h1>}
    </ul>
  ))
);

export default withStyles(style)(TodoListView);
