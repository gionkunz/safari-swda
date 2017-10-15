import {Action} from '@ngrx/store';
import {TodoItem} from '../model/todo';

export class TodoErrorAction implements Action {
  readonly type = 'TodoErrorAction';
  constructor(public readonly errorMessage: string) {}
}

export class LoadAllTodosAction implements Action {
  readonly type = 'LoadAllTodosAction';
}

export class LoadAllTodosSuccessAction implements Action {
  readonly type = 'LoadAllTodosSuccessAction';
  constructor(public readonly todoItems: TodoItem[]) {}
}

export class LoadTodoAction implements Action {
  readonly type = 'LoadTodoAction';
  constructor(public readonly nr: string) {}
}

export class LoadTodoSuccessAction implements Action {
  readonly type = 'LoadTodoSuccessAction';
  constructor(public readonly todoItem: TodoItem) {}
}

export class UpdateTodoAction implements Action {
  readonly type = 'UpdateTodoAction';
  constructor(public readonly todoNr: string, public readonly data: any) {}
}

export class UpdateTodoSuccessAction implements Action {
  readonly type = 'UpdateTodoSuccessAction';
  constructor(public readonly todoItem: TodoItem) {}
}

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';
  constructor(public readonly data: any) {}
}

export class CreateTodoSuccessAction implements Action {
  readonly type = 'CreateTodoSuccessAction';
  constructor(public readonly todoItem: TodoItem) {}
}

export type TodoActions =
  TodoErrorAction |
  LoadAllTodosAction |
  LoadAllTodosSuccessAction |
  LoadTodoAction |
  LoadTodoSuccessAction |
  UpdateTodoAction |
  UpdateTodoSuccessAction |
  CreateTodoAction |
  CreateTodoSuccessAction;
