import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Actions, Effect} from '@ngrx/effects';
import {
  CreateTodoAction, CreateTodoSuccessAction,
  LoadAllTodosAction, LoadAllTodosSuccessAction, TodoActions,
  TodoErrorAction, UpdateTodoAction, UpdateTodoSuccessAction
} from './actions';
import {TodoItem} from '../model/todo';
import {TodoService} from '../service/todo.service';

@Injectable()
export class TodoEffects {
  @Effect()
  loadTodos: Observable<TodoActions> = this.actions
    .startWith(new LoadAllTodosAction())
    .filter((action: TodoActions) => action.type === 'LoadAllTodosAction')
    .switchMap(() => {
      return this.todoService.loadTodos()
        .map((todoItems: TodoItem[]) => new LoadAllTodosSuccessAction(todoItems))
        .catch(() => Observable.of(new TodoErrorAction('Todo list could not be loaded!')));
    });

  @Effect()
  updateTodo: Observable<TodoActions> = this.actions
    .filter((action: TodoActions) => action.type === 'UpdateTodoAction')
    .switchMap((action: UpdateTodoAction) => {
      return this.todoService.updateTodo(action.todoNr, action.data)
        .map((todoItem: TodoItem) => new UpdateTodoSuccessAction(todoItem))
        .catch(() => Observable.of(new TodoErrorAction('Todo could not be updated!')));
    });

  @Effect()
  createTodo: Observable<TodoActions> = this.actions
    .filter((action: TodoActions) => action.type === 'CreateTodoAction')
    .switchMap((action: CreateTodoAction) => {
      return this.todoService.createTodo(action.data)
        .map((todoItem: TodoItem) => new CreateTodoSuccessAction(todoItem))
        .catch(() => Observable.of(new TodoErrorAction('Todo could not be updated!')));
    });

  constructor(@Inject(Actions) private actions: Actions,
              @Inject(TodoService) private todoService: TodoService) {}
}
