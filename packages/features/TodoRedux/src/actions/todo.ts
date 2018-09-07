import ITodoListItem from '../interfaces/ITodoListItem';

export const REDUX_IS_AWESOME = 'REDUX_IS_AWESOME';

export const reduxIsAwesome = () => (dispatch, getState) => {
  const { todos } = getState().todo;

  for (let i = 0; i < 10; i++) {
    dispatch({
      type: REDUX_IS_AWESOME,
      data: {
        id: todos.length,
        content: 'REDUX IS AWESOME!',
        isCompleted: false,
      } as ITodoListItem,
    });
  }
};
