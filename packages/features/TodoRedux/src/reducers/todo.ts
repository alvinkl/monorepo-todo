import { REDUX_IS_AWESOME } from '../actions/todo';

export const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REDUX_IS_AWESOME:
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    default:
      return state;
  }
};
