import { interfaces as I, services as S } from '@organizations/datasource/todo';
import { ITodoListItem } from '../interfaces/ITodoListItem';

export const FETCHING_TODO = 'FETCHING_TODO';
export const FETCHED_TODO = 'FETCHED_TODO';
export const UPDATING_TODO = 'UPDATING_TODO';
export const UPDATED_TODO = 'UPDATED_TODO';
export const ADDING_TODO = 'ADDING_TODO';
export const ADDED_TODO = 'ADDED_TODO';

let service: I.ITodoService;
initService();

export const fetchTodo = () => (dispatch) => {
  dispatch({ type: FETCHING_TODO });

  service.get().subscribe((data) => {
    const nd = data.map(
      (d) =>
        ({
          id: d.Id,
          isCompleted: d.Completed,
          text: d.Content,
        } as ITodoListItem)
    );

    dispatch({
      type: FETCHED_TODO,
      data: nd,
    });
  });
};

export const updateTodo = (id) => (dispatch, getState) => {
  dispatch({ type: UPDATING_TODO });
  const {
    todo: { todos, completedTodos, activeTodos },
  } = getState();

  let index = -1;
  const current = todos.filter((t, i) => {
    index = i;
    return t.id === id;
  });

  if (current) {
    service.update(id, !current[0].isCompleted).subscribe((data) => {
      current[0].isCompleted = data.Checked;

      return dispatch({
        type: UPDATED_TODO,
        todos: [
          ...todos.slice(0, index),
          current[0],
          ...todos.slice(index + 1),
        ],
        completedTodos: data.Checked
          ? [current[0], ...completedTodos]
          : completedTodos.filter((a) => a.id !== id),
        activeTodos: data.Checked
          ? [current[0], ...activeTodos]
          : activeTodos.filter((a) => a.id !== id),
      });
    });
  }
};

export const addTodo = (text: string) => (dispatch) => {
  dispatch({
    type: ADDING_TODO,
  });

  service.add(text).subscribe(({ Id, Content, Checked }) => {
    const convTodo: ITodoListItem = {
      id: Id,
      isCompleted: Checked,
      text: Content,
    };

    dispatch({
      type: ADDED_TODO,
      todo: convTodo,
    });
  });
};

function initService() {
  if (process.env.NODE_ENV !== 'production') {
    if (!service) service = new S.MockTodoService();
  }

  return service;
}
