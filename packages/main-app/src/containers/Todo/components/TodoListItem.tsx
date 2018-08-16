import { observer } from "mobx-react";

export const TodoListItem = observer(({ text, isCompleted, ...args }) => {
  return (
    <div className="td-list-item">
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
});

export default TodoListItem;
