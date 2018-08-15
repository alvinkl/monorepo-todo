import { observer, inject } from 'mobx-react';
import * as React from 'react'

// import './TodoListView.css';
import TodoListItem from './TodoListItem';

const TodoListView = inject('todos')(
    observer(({ todos, onChange }) => {
        console.log(todos);

        return (
            <ul>
                {todos.map(d => (
                    <TodoListItem
                        {...d}
                        key={d.id}
                        onChange={onChange.bind(null, d)}
                    />
                ))}
            </ul>
        );
    })
);

export default TodoListView;
