import { observer, inject } from "mobx-react";

import TodoListItem from "./TodoListItem";

import "./TodoListView.css";

export const TodoListView = inject("todos")(
  observer(({ todos, onChange }) => {
    console.log(todos);

    return (
      <ul className="td-list-container">
        {todos.map(d => (
          <TodoListItem {...d} key={d.id} onChange={onChange.bind(null, d)} />
        ))}
      </ul>
    );
  })
);

export default TodoListView;
