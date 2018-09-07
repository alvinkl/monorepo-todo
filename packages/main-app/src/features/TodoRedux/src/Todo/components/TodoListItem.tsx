import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';

import * as style from './todoListItem.css';

export const TodoListItem = ({ text, isCompleted, ...args }) => (
  <div className={style.items}>
    <div className="row">
      <div className="col-10">
        <label className="form-check-label">{text}</label>
      </div>
      <div className="col-2">
        <input
          className="form-check-input form-control form-control-sm"
          type="checkbox"
          {...args}
          checked={isCompleted}
        />
      </div>
    </div>
  </div>
);

export default withStyles(style)(TodoListItem);
