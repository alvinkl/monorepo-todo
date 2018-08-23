import { fetchTodo, TodoTypes } from './todo/fetchTodo';

describe('[Todo] fetchTodo', () => {
  const expectedResult: TodoTypes[] = [
    {
      completed: true,
      id: 1,
      title: 'Testing',
      userId: 1,
    },
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => expectedResult,
      })
    );
  });

  it('should return data<TodoTypes[]> without error ', async () => {
    const { error, data } = await fetchTodo();

    expect(data).toStrictEqual(data);
    expect(error).toBe(undefined);
  });
});