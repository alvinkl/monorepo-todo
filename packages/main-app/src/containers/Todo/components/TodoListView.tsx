import { observer, inject } from "mobx-react";

import TodoListItem from "./TodoListItem";

export const TodoListView = inject("todos")(
  observer(({ todos, onChange }) => {
    console.log(todos);

    return (
      <ul>
        {todos.map(d => (
          <TodoListItem {...d} key={d.id} onChange={onchange.bind(null, d)} />
        ))}
      </ul>
    );
  })
);

export default TodoListView;
