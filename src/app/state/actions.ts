import {Action} from '@ngrx/store';

export class UpdateTodoAction implements Action {
  readonly type = 'UpdateTodoAction';
  constructor(public readonly todoNr: string, public readonly data: any) {}
}

export class CreateTodoAction implements Action {
  readonly type = 'CreateTodoAction';
  constructor(public readonly data: any) {}
}

export type TodoActions =
  UpdateTodoAction |
  CreateTodoAction;
