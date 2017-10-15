export interface ServerTodoItem {
  nr: string;
  title: string;
  description: string;
  done: boolean;
}

export const todos: ServerTodoItem[] = [{
  nr: '1',
  title: 'Todo 1',
  description: 'This is Todo 1',
  done: false
}, {
  nr: '2',
  title: 'Todo 2',
  description: 'This is Todo 2',
  done: false
}, {
  nr: '3',
  title: 'Todo 3',
  description: 'This is Todo 3',
  done: false
}];
