const DEV = process.env.NODE_ENV !== 'production';

enum TodoAPIDevelopment {
  BASE = 'http://localhost:8000',
  GET = 'http://localhost:8000/todo',
  ADD = 'http://localhost:8000/todo',
  UPDATE = 'http://localhost:8000/todo/$id',
}

enum TodoAPIProduction {
  BASE = 'https://api.todoapi.com',
  GET = 'https://api.todoapi.com/todo',
  ADD = 'https://api.todoapi.com/todo',
  UPDATE = 'https://api.todoapi.com/todo/$id',
}

export const TodoAPI = DEV ? TodoAPIDevelopment : TodoAPIProduction;
