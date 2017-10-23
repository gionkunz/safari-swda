import {Action} from '@ngrx/store';

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';
  constructor(public readonly data: any) {}
}

export type TodoActions = CreateTodoAction;
