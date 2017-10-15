import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TodoItem} from '../model/todo';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TodoService {
  url = 'http://localhost:8080';

  loadTodos(): Observable<TodoItem[]> {
    return this.http
      .get(`${this.url}/todos`)
      .map((response) => <TodoItem[]>response.json());
  }

  loadTodo(nr: string): Observable<TodoItem> {
    return this.http
      .get(`${this.url}/todos/${nr}`)
      .map((response) => <TodoItem>response.json());
  }

  createTodo(data: any): Observable<TodoItem> {
    return this.http
      .put(`${this.url}/todos`, data)
      .map((response) => <TodoItem>response.json());
  }

  updateTodo(nr: string, data: any): Observable<TodoItem> {
    return this.http
      .post(`${this.url}/todos/${nr}`, data)
      .map((response) => <TodoItem>response.json());
  }

  constructor(@Inject(Http) private http: Http) {}
}
