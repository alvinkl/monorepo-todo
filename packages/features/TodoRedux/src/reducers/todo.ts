import {
  ADDED_TODO,
  FETCHED_TODO,
  FETCHING_TODO,
  UPDATED_TODO,
} from '../actions/todo';

export const initialState = {
  todos: [],
  activeTodos: [],
  completedTodos: [],

  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODO:
      return {
        ...state,
        loading: true,
      };

    case FETCHED_TODO:
      return {
        ...state,
        todos: action.data,
        activeTodos: action.data.filter((t) => !t.isCompleted),
        completedTodos: action.data.filter((t) => t.isCompleted),
        loading: false,
      };

    case UPDATED_TODO:
      return {
        ...state,
        todos: action.todos,
        activeTodos: action.activeTodos,
        completedTodos: action.completedTodos,
      };

    case ADDED_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos],
        activeTodos: [action.todo, ...state.activeTodos],
      };

    default:
      return state;
  }
};
