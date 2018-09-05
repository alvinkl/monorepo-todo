import withStyles from 'isomorphic-style-loader/lib/withStyles';

import * as React from 'react';

import TodoListItem from './TodoListItem';

import * as style from './todoListView.css';

export const TodoListView = ({ todos, error, onChange }) => (
  <ul className={style.list}>
    {!error &&
      todos.map((d) => (
        <TodoListItem {...d} key={d.id} onChange={onChange.bind(null, d.id)} />
      ))}

    {error && <h1>ERROR LAH</h1>}
  </ul>
);

export default withStyles(style)(TodoListView);
