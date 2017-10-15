import {TodoMap} from '../model/todo';

export interface ApplicationState {
  todo: TodoState;
}

export interface TodoState {
  todoMap: TodoMap;
}

export const defaultTodoState: TodoState = {
  todoMap: {}
};

export const defaultApplicationState: ApplicationState = {
  todo: defaultTodoState
};
