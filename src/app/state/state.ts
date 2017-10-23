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
    description: 'Todo 1 Description',
    done: true
  }]
};

export const defaultApplicationState: ApplicationState = {
  todo: defaultTodoState
};
