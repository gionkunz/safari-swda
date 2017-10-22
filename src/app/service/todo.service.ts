import {Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [{
    nr: '1',
    title: 'Todo 1',
    description: 'Todo 1 Description',
    done: true
  }, {
    nr: '2',
    title: 'Todo 2',
    description: 'Todo 2 Description',
    done: false
  }, {
    nr: '3',
    title: 'Todo 3',
    description: 'Todo 3 Description',
    done: false
  }];

  getTodos(): TodoItem[] {
    return this.todos;
  }

  getTodo(nr: string): TodoItem {
    return this.todos.find((todo) => todo.nr === nr) || <TodoItem>{};
  }

  private getNextNr() {
    return `${
      this.todos.reduce((n, todo) => +todo.nr > +n ? +todo.nr : +n, 0) + 1
    }`;
  }

  createTodo(data: any): void {
    this.todos = [...this.todos, {
      nr: this.getNextNr(),
      done: false,
      ...data
    }];
  }

  updateTodo(nr: string, data: any): void {
    const index = this.todos.findIndex((todo) => todo.nr === nr);
    if (index !== -1) {
      this.todos[index] = {
        ...this.todos[index],
        ...data
      };
    }
  }
}
