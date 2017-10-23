import {TodoItem} from '../model/todo';

export interface ApplicationState {
  todo: TodoState;
}

export interface TodoState {
  todoItems: TodoItem[];
}

export const defaultTodoState: TodoState = {
  todoItems: [{
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
  }]
};

export const defaultApplicationState: ApplicationState = {
  todo: defaultTodoState
};
