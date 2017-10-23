import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'swda-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: Observable<TodoItem[]>;

  constructor(@Inject(Router) private router: Router) {
    this.todoItems = Observable.of([]);
  }

  markAsDone(todoItem: TodoItem) {

  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.nr]);
  }
}
