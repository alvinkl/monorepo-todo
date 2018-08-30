import { IUpdateParam } from '../../fetch/updateTodo';
import { ITodoService } from '../../interfaces';
import { ITodoListItem } from '../../models';

export class MockOnlineTodoService implements ITodoService {
  saveTodo: (
    todo: IUpdateParam
  ) => {
    return;
  };

  addTodo(todo: ITodoListItem) {
    throw new Error(JSON.stringify(todo));
  }
  async getTodos(): Promise<ITodoListItem[]> {
    return [
      {
        title: 'testing',
        id: 1,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 2,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 3,
        completed: true,
        userId: 0,
      },
      {
        title: 'testing',
        id: 4,
        completed: true,
        userId: 0,
      },
    ];
  }
}

export default MockOnlineTodoService;
