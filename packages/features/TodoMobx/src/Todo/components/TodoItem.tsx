import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import * as style from './todoItem.css';

export const TodoItem = inject('store')(
  observer(({ store: { todos } }) => {
    return todos.map((t) => (
      <li key={t.id} className={style.list}>
        {t.content}
      </li>
    ));
  })
);

export default withStyles(style)(TodoItem);
