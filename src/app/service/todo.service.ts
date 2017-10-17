import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TodoItem} from '../model/todo';
import {Observable} from 'rxjs/Rx';

/**
 * Inject Http into your TodoService
 * ---------------------------------
 * You can use `@Inject(Http) private http: Http` in your constructor to
 * obtain the Http service.
 *
 * Create the necessary calls within TodoService to the backend
 * ------------------------------------------------------------
 * Implement the calls to the backend correctly using the following URLS:
 * GET http://localhost:8080/todos
 * PUT http://localhost:8080/todos
 *     BODY: {title: string; description: string; done: boolean}
 * GET http://localhost:8080/todos/:id
 * POST http://localhost:8080/todos/:id
 *     BODY: {title: string; description: string; done: boolean}
 *
 * Examples: https://angular.io/tutorial/toh-pt6
 *
 */

@Injectable()
export class TodoService {
  url = 'http://localhost:8080';

  loadTodos(): Observable<TodoItem[]> {
    return Observable.of([]);
  }

  loadTodo(nr: string): Observable<TodoItem> {
    return Observable.of({});
  }

  createTodo(data: any): Observable<TodoItem> {
    return Observable.of({});
  }

  updateTodo(nr: string, data: any): Observable<TodoItem> {
    return Observable.of({});
  }

  constructor(@Inject(Http) private http: Http) {}
}
