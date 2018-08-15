import { observer, inject } from 'mobx-react';
import * as React from 'react'
// import './TodoListItem.css';

const TodoListItem = observer(({ text, isCompleted, ...args }) => (
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
));

export default TodoListItem;
