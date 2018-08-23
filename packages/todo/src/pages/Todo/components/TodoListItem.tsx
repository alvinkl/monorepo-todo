import { css } from 'emotion';
import { observer } from 'mobx-react';
import * as React from 'react';

const style = css`
  padding: 4px 0px;
  border-bottom: 1px solid #dee2e6;

  &:last-of-type {
    border: none;
  }
`;

export const TodoListItem = observer(({ text, isCompleted, ...args }) => (
  <div className={style}>
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
));

export default TodoListItem;
