import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';

import * as style from './todoItem.css';

export const TodoItem = ({ todos }) =>
  todos.map((t) => (
    <li className={style.list} key={t.id}>
      {t.content}
    </li>
  ));

import { connect } from 'react-redux';

const mapStateToProps = ({ todo }) => ({
  todos: todo.todos,
});

export default withStyles(style)(connect(mapStateToProps)(TodoItem));
