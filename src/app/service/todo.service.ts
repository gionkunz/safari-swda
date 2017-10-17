import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TodoItem} from '../model/todo';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TodoService {
  url = 'http://localhost:8080';

  loadTodos(): Observable<TodoItem[]> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET http://localhost:8080/todos
    return Observable.of([]);
  }

  loadTodo(nr: string): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET http://localhost:8080/todos/:nr
    return Observable.of({});
  }

  createTodo(data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: PUT http://localhost:8080/todos
    // Data: {title: string; description: string; done: boolean}
    return Observable.of({});
  }

  updateTodo(nr: string, data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST http://localhost:8080/todos/:nr
    // Data: {title: string; description: string; done: boolean}
    return Observable.of({});
  }

  constructor(@Inject(Http) private http: Http) {}
}
