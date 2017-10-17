import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: Observable<TodoItem[]>;

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router) {
    this.todoItems = todoService.loadTodos();
  }

  markAsDone(todoItem: TodoItem) {
    this.todoItems = this.todoService.updateTodo(todoItem.nr, {
      done: !todoItem.done
    }).switchMap(() => this.todoService.loadTodos());
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.nr]);
  }
}
